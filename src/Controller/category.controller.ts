import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {getRepository} from "typeorm";

import {Category} from "../entity/Category"

export class CategoryController{
    async getCategory(req, res,next) {
      connection
                .then(async connection => {
                    const CategoryList: Category[] = await connection.manager.find(Category);
                    res.json(CategoryList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async CreateCategory(req, res,next) {
      connection
                .then(async connection => {
                    console.log(req.body)
                    let category = new Category()
                    category.CategoryName = req.body.CategoryName
                    await connection.manager.save(category);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
        async updateCategory(req, res,next) {
        try{

       
            let catRepo=getRepository(Category)

            let CatagoryToUpdate=await catRepo.findOne(req.params.id);
        
            CatagoryToUpdate.CategoryName=req.body.CategoryName;
            await catRepo.save(CatagoryToUpdate)

            res.json(CatagoryToUpdate);
        }
           catch(error){
                console.error("Error ", error);
                res.json(error);
            }; 
    }
}