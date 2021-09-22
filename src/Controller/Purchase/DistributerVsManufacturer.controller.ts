import {request, Response} from 'express';

import {getRepository} from 'typeorm';
import {DistributerVsManufacturer} from '../../entity/Purchase/DistributerVsManufacturer';

export class DistributerVsManufacturerController{
    async assignDistributervsManufacturer(req, res,next){
        let data =req.body;
        let arraytoSave=[]
        for(let item of data){
            let newObj=new DistributerVsManufacturer();
            newObj.distributor=item.distributor;
            newObj.manufacturer=item.manufacturer;
            arraytoSave.push(newObj);
        }

        getRepository(DistributerVsManufacturer).save(arraytoSave).then(result=>{
            return res.status(200).json({data:result});
        }).catch(error=>{
            return res.status(200).json({Error:error});
        })
    }
}