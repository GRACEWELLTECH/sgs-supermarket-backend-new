import {Request, Response} from 'express';
import {getRepository} from 'typeorm'
import {RepackEntry} from '../../entity/Inventory/RepackEntry'
import {Repack} from '../../entity/Inventory/Repack'

export class RepackEntryController{

    async repackEntry(req: Request, res: Response)
    {
        let dataArray=req.body;
        console.log("dataArray",dataArray)
        let objToSave=[];
        let repack=await getRepository(RepackEntry).save(new Repack())
        dataArray.forEach(product=>{
            console.log("product",product)
            let entry=new RepackEntry();
            entry.repack=repack.id;
            entry.product=product.productId;
            entry.quantity=product.quantity;
           
            objToSave.push(entry)
        })

        getRepository(RepackEntry).save(objToSave).then(savedObj=>{
            
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
        getRepository(RepackEntry).find({where:{repack:req.params.id}}).then(list=>{
            return res.status(200).json({message:"Success",data:list})
        }).catch(err=>{
            return res.status(400).json({message:"Error",Error:err})
        })
    }
}