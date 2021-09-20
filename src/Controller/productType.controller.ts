import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {getRepository,In} from "typeorm";

import {ProductType} from "../entity/ProductType"

export class ProductTypeController{
    async getProductType(req, res,next) {
      connection
                .then(async connection => {
                    const typeList: ProductType[] = await connection.manager.find(ProductType,{relations:["subCategory","subCategory.category"]});
                    res.json(typeList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async getProductTypeBySubCategory(req, res,next) {
      connection
                .then(async connection => {
                    const typeList: ProductType[] = await connection.manager
                    .find(ProductType,{where:{subCategory:req.params.id},relations:["subCategory","subCategory.category"]});
                    res.json(typeList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async getProductTypeBySubCategoryList(req, res,next) {
      connection
                .then(async connection => {
                    const typeList: ProductType[] = await connection.manager
                    .find(ProductType,{where:{subCategory:In(req.body.subCategory)},relations:["subCategory","subCategory.category"]});
                    res.json(typeList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async CreateProductType(req, res,next) {
        console.log(" req.body",req.body)

      connection
                .then(async connection => {
                   
                    let Type = new ProductType()
                    Type.typeName = req.body.typeName;
                    Type.subCategory = req.body.subCategory;

                    await connection.manager.save(Type);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}


