import {Request, Response} from 'express';
import { getRepository } from 'typeorm';

import ReorderMaxMin from '../../entity/Inventory/ReorderMaxMin'



export class ReorderMaxminController{

    async UpdateMaxMin(req,res,next){
        let data=req.body;
        let arrayToSave=[]; 
        for(let item of data){

            let Obj=await getRepository(ReorderMaxMin).findOne({ean:item.eanId})

            if(Obj==null){
                Obj=new ReorderMaxMin();
                Obj.ean=item.eanId;
                

            }
            Obj.max=item.maxLevel;
            Obj.min=item.minLevel;
            arrayToSave.push(Obj);
        }
        getRepository(ReorderMaxMin).save(arrayToSave).then(result => {

            return res.status(200).json({data:result})

        }).catch(err => {
            return res.status(400).json({Error:err})
        })

    }
}