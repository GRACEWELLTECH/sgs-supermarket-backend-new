import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { connection } from '../../connection/Connection';

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


getProductsForOpeningStock(req,res,next){

    connection
    .then(async connection => {
       let list=await connection.manager.query("select A.*,B.id as stockId,B.quantity from product A left outer join opening_stock B on A.id=B.productId;");

       return res.status(200).json({message:"Success",data:list})
    }).catch(err => {
        return res.status(200).json({message:"Success",Error:err})
    })
}
}