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
}


