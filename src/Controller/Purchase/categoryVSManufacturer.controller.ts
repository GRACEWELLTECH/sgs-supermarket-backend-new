import {Request, request, Response, response} from 'express';
import {connection} from "../../connection/Connection";
import {getRepository} from 'typeorm'
import {CategoryVsManufacturer} from '../../entity/Purchase/CategoryVsManufacturer'

export class CategoryVsManufacturerController{

    async asssignCategoryVsManufacturer(req: Request,res: Response,next){

        let repo=getRepository(CategoryVsManufacturer);
        let ManufacturerList=req.body.manufacturer;
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
            newObj.manufacturer=Manufacturer.id;
            saveArray.push(newObj);
        })

        repo.save(saveArray).then(resList=>{
            return res.status(200).json({message: "Successfully Saved."});
        })

    
    }

    getCategoryVsManufacturer(req,res,next){

        let condtion:any = {};

        if(req.body.category!=null&&req.body.category!=""&&req.body.category!=undefined)
        condtion.category=req.body.category;

        if(req.body.subCategory!=null&&req.body.subCategory!=""&&req.body.subCategory!=undefined)
        condtion.subCategory=req.body.subCategory;

        if(req.body.type!=null&&req.body.type!=""&&req.body.type!=undefined)
        condtion.type=req.body.type;

        if(req.body.subType!=null&&req.body.subType!=""&&req.body.subType!=undefined)
        condtion.subType=req.body.subType;

        if(req.body.kind!=null&&req.body.kind!=""&&req.body.kind!=undefined)
        condtion.kind=req.body.kind;

        if(req.body.subKind!=null&&req.body.subKind!=""&&req.body.subKind!=undefined)
        condtion.subKind=req.body.subKind;

        getRepository(CategoryVsManufacturer).find({where:{condtion},relations:["manufacturer"]}).then(list => {
            return res.status(200).json({data:list});
        }).catch(err => {
            return res.status(400).json({Error:err});
        })

    }

}