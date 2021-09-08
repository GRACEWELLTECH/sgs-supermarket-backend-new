import {Request, Response} from 'express';
import {getRepository} from 'typeorm'
import {RepackEntry} from '../../entity/Inventory/RepackEntry'

export class RepackEntryController{

    async repackEntry(req: Request, res: Response)
    {
        let dataArray=req.body;
        let objToSave=[];
        dataArray.forEach(product=>{
            let entry=new RepackEntry();

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


    getAllRepackEntry(req, res,next){

        getRepository(RepackEntry).find({relations:["product"]}).then(repos=>{
            return res.status(200).json({message:"Success",data:repos})
        }).catch(err=>{
            return res.status(400).json({message:"Error",Error:err})
        })
    }
}