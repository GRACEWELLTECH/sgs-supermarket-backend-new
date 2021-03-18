import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {getRepository} from "typeorm";

import {SubCategory} from "../entity/SubCategory"

export class SubCategoryController{
     async getSubCategory(req, res,next) {
     connection
                .then(async connection => {
                    const CategoryList: SubCategory[] = await connection.manager.find(SubCategory);
                    res.json(CategoryList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
     async getSubCategorybyCategory(req, res,next) {
     connection
                .then(async connection => {
                    const CategoryList: SubCategory[] = await connection.manager.find(SubCategory,{where:{category:req.params.categoryId}});
                    res.json(CategoryList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async createSubCategory(req, res,next) {
       connection
                .then(async connection => {
                    console.log(req.body)
                    let subcategory = new SubCategory()
                    subcategory.SubCategoryName = req.body.SubCategoryName
                    subcategory.category = req.body.category
                   
                    await connection.manager.save(subcategory);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async updateSubCategory(req, res,next) {
        try{
            let catRepo=getRepository(SubCategory);
            let CatagoryToUpdate=await catRepo.findOne(req.params.id);
            CatagoryToUpdate.SubCategoryName=req.body.CategoryName;
            CatagoryToUpdate.category=req.body.category;
            await catRepo.save(CatagoryToUpdate)
            res.json(CatagoryToUpdate);
        }
           catch(error){
                console.error("Error ", error);
                res.json(error);
            }; 
    }
}


