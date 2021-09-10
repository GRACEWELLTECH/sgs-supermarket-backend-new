import {Request, Response} from 'express';
import {getRepository,In} from 'typeorm';

import {Product} from '../../entity/Product'
import {RepackEntry} from '../../entity/Inventory/RepackEntry'
import {Repack} from '../../entity/Inventory/Repack'
import {RepackStock} from '../../entity/Inventory/repackStock'
import {RepackTransfer} from '../../entity/Inventory/RePackTransfer'
import {RepackTransferDetail} from '../../entity/Inventory/RepackTransferDetails'
import { RepackWastage } from '../../entity/Inventory/RepackWastage';
import { RepackWastageDetail } from '../../entity/Inventory/RepackWastageDetail';
import {RepackWeightloss} from '../../entity/Inventory/RepackWeightLoss'
import {RepackweightLossDetail} from '../../entity/Inventory/RepackWeightLossDetails'
import {RepackReuse} from '../../entity/Inventory/RepackReuse'
import {RepackReuseDetail} from '../../entity/Inventory/RepackReuseDetail'


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
                    stockObj.wareHouse=stockObj.wareHouse+parseInt(item.quantity)
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

        getRepository(RepackTransfer).find().
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

   async getREpackStockbyBulk(req, res,next){

        let productList=await getRepository(Product).find({where:{bulkProduct:req.params.id}})
        let ids=[];
        productList.forEach(product=>{
            ids.push(product.id);
        })
        getRepository(RepackStock).find({where:{product:In(ids)},relations:["product"]}).then(repos=>{
            return res.status(200).json({message:"Success",data:repos});
        }).catch(error=>{
            return res.status(400).json({message:"Error",error:error});
        })
   }

    stockUpdate(req, res,next){
        let list=req.body.stock;
        list.forEach(item=>{
            if(req.body.updateStockfor=="wareHouse")
            {
                item.wareHouse=item.wareHouse+parseInt(item.quantity);
            }else if(req.body.updateStockfor=="store"){
                item.store=item.store+parseInt(item.quantity);
            }else if(req.body.updateStockfor=="shop"){
                item.shop=item.shop+parseInt(item.quantity);
            }
        });

        getRepository(RepackStock).save(list).then(savedObj=>{
            return res.status(200).json({message:"Success",data:savedObj});
         }).catch(error=>{
             return res.status(400).json({message:"Error",error:error});
         })

    }


    async RepackWastageEntry(req, res,next){
        
        let wastage=await getRepository(RepackWastage).save(new RepackWastage());
        
        let details=req.body;
        var savelist=[];
        details.forEach(item=>{
            let newObj=new RepackWastageDetail();
            newObj.product=item.product;
            newObj.weight=item.weight;
            newObj.wastage=wastage.id;
            savelist.push(newObj);
        })

        getRepository(RepackWastageDetail).save(savelist).then(list=>{
            return res.status(200).json({meaasage:"success",data:list});
        }).catch(error=>{
            return res.status(404).json({meaasage:"error",Error:error});
        })
    }

    async getAllRepackWastage(req, res,next){
       
        getRepository(RepackWastage).find().then(list=>{
            return res.status(200).json({message:"Success",data:list});
        }).catch(error=>{
            return res.status(200).json({message:"error",error:error});
        })
    }
    async getRepackWastageDetail(req, res,next){
       
        getRepository(RepackWastageDetail).find({relations:["product"],where:{wastage:req.params.id}}).then(list=>{
            return res.status(200).json({message:"Success",data:list});
        }).catch(error=>{
            return res.status(200).json({message:"error",error:error});
        })
    }

    async RepackWeightLossEntry(req,res,next){

        let reg=await getRepository(RepackWeightloss).save(new RepackWeightloss())

        let listtoSave=req.body;
        let tosave=[];
        listtoSave.forEach(item=>{
            let newObj=new RepackweightLossDetail();
            newObj.product=item.product;
            newObj.weight=item.weight;
            newObj.register=reg.id;
            tosave.push(newObj);
        })

        getRepository(RepackweightLossDetail).save(tosave).then(list=>{
            return res.status(200).json({message:"Success",data:list});
        }).catch(error=>{
            return res.status(200).json({message:"error",error:error});
        })
    }

    getAllRepackWeightLoss(req, res,next){
        
        getRepository(RepackWeightloss).find().then(list=>{
            return res.status(200).json({message:"Success",data:list});
        }).catch(error=>{
            return res.status(200).json({message:"error",error:error});
        })
    }

    async getRepackWeightlossDetail(req, res,next){
       
        getRepository(RepackweightLossDetail).find({relations:["product","register"],where:{register:req.params.id}}).then(list=>{
            return res.status(200).json({message:"Success",data:list});
        }).catch(error=>{
            return res.status(200).json({message:"error",error:error});
        })
    }


    async getDetailsForReUse(req, res,next){

     let list=await   getRepository(Product).query("select a.id as 'product',a.productName ,0 as 'quantity',a.bulkProduct,b.productName as 'bulkProductName',0 as 'availableQuantity' from product a,product b where a.bulkProduct=b.id;")
    return res.status(200).json({message:"asd",data:list})
    }

    async saveRepackReuse(req, res,next){
        let reg=await getRepository(RepackReuse).save(new RepackReuse());

        let list=req.body;

        let arrayToSave=[];

        list.forEach(item=>{
            let newObj=new RepackReuseDetail();
            newObj.product=item.product;
            newObj.quantity=item.quantity;
            newObj.bulkProduct=item.bulkProduct;
            newObj.availableQuantity=item.availableQuantity;
            newObj.register=reg.id
            arrayToSave.push(newObj);
        })

        getRepository(RepackReuseDetail).save(arrayToSave).then(result=>{
            return res.status(200).json({message:"Success",data:result});
        }).catch(error=>{
            return res.status(200).json({message:"error",error:error});
        })

    }
    
}