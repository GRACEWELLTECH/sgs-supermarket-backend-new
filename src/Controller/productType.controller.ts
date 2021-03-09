import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {getRepository} from "typeorm";

import {ProductType} from "../entity/ProductType"

export class ProductTypeController{
    async getProductType(req, res,next) {
      connection
                .then(async connection => {
                    const typeList: ProductType[] = await connection.manager.find(ProductType);
                    res.json(typeList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async CreateProductType(req, res,next) {
      connection
                .then(async connection => {
                   
                    let Type = new ProductType()
                    Type.typeName = req.body.typeName;

                    await connection.manager.save(Type);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}


