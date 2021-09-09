import {Request, request, Response, response} from 'express';
import {connection} from "../../connection/Connection";
import {getRepository} from 'typeorm'
import {CategoryVsManufacturer} from '../../entity/Purchase/CategoryVsManufacturer'

export class CategoryVsBrandController{

    async asssignCategoryVsManufacturer(req: Request,res: Response,next){

        let repo=getRepository(CategoryVsManufacturer);
        let ManufacturerList=req.body.Manufacturer;
       let saveArray:CategoryVsManufacturer[]=[]
       ManufacturerList.forEach(Manufacturer => {
            let newObj=new CategoryVsManufacturer
            
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