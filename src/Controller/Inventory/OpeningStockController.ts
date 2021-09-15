import {Request, Response} from 'express';
import { getRepository } from 'typeorm';

import OpeningStock from '../../entity/Inventory/OpeningStock'

export default class OpeningStockController{

    async saveOpeningStock(req, res,next)
    {
        let data=req.body;
        let arrayTosave=[]
        data.forEach(element => {
            let newObj=new OpeningStock();
            newObj.product=element.product;
            newObj.quantity=element.quantity;
            arrayTosave.push(newObj);
        });

        getRepository(OpeningStock).save(arrayTosave).then(result=>{
            return res.status(200).json({message:"Success",data:result});
        }).catch(error=>{
            return res.status(400).json({message:"error",Error:error});
        })
    }


getProductsForOpeningStock(){

}
}