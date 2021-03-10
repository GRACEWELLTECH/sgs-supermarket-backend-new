import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {getRepository} from "typeorm";

import {ProductSubType} from "../entity/ProductSubType"

export class ProductSubTypeController{
    async getSubType(req, res,next) {
      connection
                .then(async connection => {
                    const typeList: ProductSubType[] = await connection.manager.find(ProductSubType);
                    res.json(typeList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async CreateSubType(req, res,next) {
      connection
                .then(async connection => {
                   
                    let Type = new ProductSubType()
                    Type.SubTypeName = req.body.SubTypeName;
                    Type.productType = req.body.productType;

                    await connection.manager.save(Type);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}


