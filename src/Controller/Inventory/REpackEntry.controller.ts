import {Request, Response} from 'express';
import {getRepository} from 'typeorm'
import {RepackEntry} from '../../entity/Inventory/RepackEntry'
import {Repack} from '../../entity/Inventory/Repack'
import {RepackStock} from '../../entity/Inventory/repackStock'
import {RepackTransfer} from '../../entity/Inventory/RePackTransfer'
import {RepackTransferDetail} from '../../entity/Inventory/RepackTransferDetails'



export class RepackEntryController{

    async repackEntry(req: Request, res: Response)
    {
        let dataArray=req.body;
        console.log("dataArray",dataArray)
        let objToSave=[];
        let repack=await getRepository(Repack).save(new Repack())
        dataArray.forEach(product=>{
            
            console.log("product",product)
            let entry=new RepackEntry();
            entry.repack=repack.id;
            entry.product=product.productId;
            entry.quantity=product.quantity;
            objToSave.push(entry)


        })

        getRepository(RepackEntry).save(objToSave).then(savedObj=>{
            savedObj.forEach(async item=>{
                let stock=await getRepository(RepackStock).count({where:{product:item.product}})
                let stockObj:RepackStock;
                if(stock>0){
                    stockObj=await getRepository(RepackStock).findOne({where:{product:item.product}})
                        stockObj.wareHouse=stockObj.wareHouse+item.quantity
                }else{
                    stockObj=new RepackStock();
                    stockObj.product=item.product;
                    stockObj.wareHouse=item.quantity;
                }
                await getRepository(RepackStock).save(stockObj);

            })
            return res.status(200).json({message:"saved Successfully",data:savedObj})
        }).catch(err=>{
            return res.status(400).json({message:"Error",Error:err})
        })
    }
    getAllRepack(req, res,next){

        getRepository(Repack).find({relations:["entry"]}).then(repos=>{
            return res.status(200).json({message:"Success",data:repos})
        }).catch(err=>{
            return res.status(400).json({message:"Error",Error:err})
        })
    }

    getAllRepackEntry(req, res,next){

        getRepository(RepackEntry).find({relations:["product"]}).then(repos=>{
            return res.status(200).json({message:"Success",data:repos})
        }).catch(err=>{
            return res.status(400).json({message:"Error",Error:err})
        })
    }

    getRepackEntryByRepack(req, res,next)
    {
        getRepository(RepackEntry).find({where:{repack:req.params.id},relations:["product"]}).then(list=>{
            return res.status(200).json({message:"Success",data:list})
        }).catch(err=>{
            return res.status(400).json({message:"Error",Error:err})
        })
    }

    async RePackTransfer(req, res,next){

        let transferObj=new RepackTransfer();

        transferObj.transferFrom=req.body.transferFrom;
        transferObj.transferTo=req.body.transferTo;

        let tranfer=await getRepository(RepackTransfer).save(transferObj)
        let prodList=req.body.product;
        let detailList:RepackTransferDetail[]=[];
        prodList.forEach(item=>{
            let NewObj=new RepackTransferDetail();
            NewObj.to=tranfer.transferTo;
            NewObj.from=tranfer.transferFrom;
            NewObj.quantity=item.quantity;
            NewObj.product=item.productId;
            NewObj.transfer=tranfer.id;
            detailList.push(NewObj);
        })

        getRepository(RepackTransferDetail).save(detailList).then(savedObj=>{
            savedObj.forEach(async item=>{
             let stock=  await getRepository(RepackStock).findOne({where:{product:item.product}});
                if(item.from=="Warehouse")
                {
                    stock.wareHouse=stock.wareHouse-item.quantity;
                }else if (item.from=="Store")
                {
                    stock.store=stock.store-item.quantity;
                }else if(item.from=="Shop"){
                    stock.shop=stock.shop-item.quantity;
                }

                if(item.to=="Warehouse"){
                    stock.wareHouse=stock.wareHouse+item.quantity;
                }else if (item.to=="Store")
                {
                    stock.store=stock.store+item.quantity;
                }else if(item.to=="Shop"){
                    stock.shop=stock.shop+item.quantity;
                }

            })
            return res.status(200).json({message:"Success",data:savedObj});

        }).catch(error=>{
            return res.status(400).json({message:"Error",error:error});

        })
      
    }


    getAllTransfer(req, res,next){

        getRepository(RepackTransfer).find({relations:["detail","detail.product"]}).
        then(list => {
            return res.status(200).json({message:"Success",data:list});
        }).catch(error=>{
            return res.status(400).json({message:"Error",error:error});

        })
    }
    getTransferById(req, res,next){

        getRepository(RepackTransferDetail).find({where:{transfer:req.params.id},relations:["product","transfer"]}).
        then(list => {
            return res.status(200).json({message:"Success",data:list});
        }).catch(error=>{
            return res.status(400).json({message:"Error",error:error});

        })
    }


    getAllStock(req, res,next){
         getRepository(RepackStock).find({relations:["product"]}).then(repos=>{
             return res.status(200).json({message:"Success",data:repos});
         }).catch(error=>{
             return res.status(400).json({message:"Error",error:error});
         })
    }

    stockUpdate(req, res,next){
        let list=req.body.stock;
        list.forEach(item=>{
            if(req.body.updateStockfor=="Warehouse")
            {
                item.wareHouse=item.wareHouse+item.quantity;
            }else if(req.body.updateStockfor=="Store"){
                item.store=item.store+item.quantity;
            }else{
                item.shop=item.shop+item.quantity;
            }
        });

        getRepository(RepackStock).save(list).then(savedObj=>{
            return res.status(200).json({message:"Success",data:savedObj});
         }).catch(error=>{
             return res.status(400).json({message:"Error",error:error});
         })

    }
}