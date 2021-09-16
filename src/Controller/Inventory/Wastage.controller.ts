import {Request, Response} from 'express';
import {getRepository} from 'typeorm'
import {Wastage} from '../../entity/Inventory/wastage'
import {WastageDetail} from '../../entity/Inventory/WastageDetail'

export class WastageController{

    async saveWastage(req,res,next) {
        let data=req.body;
        let arrayToSave=[];
        data.forEach(item=>{
            let newObj=new Wastage()
            newObj.product=item.product;
            newObj.weight=item.weight;
            arrayToSave.push(newObj);
        })

        getRepository(Wastage).save(arrayToSave).then(result=>{
            return res.status(200).json({message:"Success",data:result});
        }).catch(error=>{
            return res.status(400).json({message:"Error",Error:error});
        })
    }
}