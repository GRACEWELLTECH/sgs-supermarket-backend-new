import {Request, request, Response, response} from 'express';

import {getRepository} from 'typeorm'
import {CategoryVsBrand} from '../../entity/Purchase/CategoryVsBrand'

export class CategoryVsBrandController{

    async asssignCategoryVsBrand(req: Request,res: Response,next){

        let repo=getRepository(CategoryVsBrand);
        let brandList=req.body.brand;
       let saveArray:CategoryVsBrand[]=[]
        brandList.forEach(brand => {
            let newObj=new CategoryVsBrand
            
            newObj.categoryType=req.body.categoryType;
            newObj.category=req.body.category;
            newObj.subCategory=req.body.subCategory;
            newObj.subType=req.body.subType;
            newObj.productType=req.body.productType;
            newObj.kind=req.body.kind;
            newObj.subKind=req.body.subKind;
            saveArray.push(newObj);
        })

        repo.save(saveArray).then(resList=>{
            return res.status(200).json({message: "Successfully Saved."});
        })

    
    }
}