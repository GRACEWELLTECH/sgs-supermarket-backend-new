import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { connection } from '../../connection/Connection';

import OpeningStock from '../../entity/Inventory/OpeningStock'


export default class OpeningStockController{

    async saveOpeningStock(req, res,next)
    {
        let data=req.body;
        let arrayTosave=[]

        for(let element of data){
            let newObj:OpeningStock;
            if(element.stockId==null){
              
                newObj=new OpeningStock();
                newObj.quantity=element.quantity;
            }else{
                
                console.log("stockId-tr", element.stockId)
                newObj=await getRepository(OpeningStock).findOne({id:element.stockId});
                newObj.quantity += parseInt(element.quantity);
            }
           console.log("newObj", newObj)
            newObj.product=element.product;
            
            arrayTosave.push(newObj);
        };
        console.log("arrayTosave", arrayTosave)
        getRepository(OpeningStock).save(arrayTosave).then(result=>{
            return res.status(200).json({message:"Success",data:result});
        }).catch(error=>{
            return res.status(400).json({message:"error",Error:error});
        })
    }


getProductsForOpeningStock(req,res,next){

    connection
    .then(async connection => {
       let list=await connection.manager.query("select A.*,B.id as stockId,IFNULL(B.quantity,0) as currentStock from product A left outer join opening_stock B on A.id=B.productId;");

       return res.status(200).json({message:"Success",data:list})
    }).catch(err => {
        return res.status(200).json({message:"Success",Error:err})
    })
}

filterProductsForOpeningStock(req,res,next){
    let condtion= "";

    if(req.body.category!=null&&req.body.category!=""&&req.body.category!=undefined)
    condtion=condtion+"A.categoryId="+req.body.category;

    if(req.body.subCategory!=null&&req.body.subCategory!=""&&req.body.subCategory!=undefined)
    condtion=condtion+" and A.subCategoryId ="+req.body.subCategory;

    if(req.body.type!=null&&req.body.type!=""&&req.body.type!=undefined)
    condtion=condtion+" and A.typeId ="+req.body.type;

    if(req.body.subType!=null&&req.body.subType!=""&&req.body.subType!=undefined)
    condtion=condtion+" and A.subTypeId ="+req.body.subType;

    if(req.body.kind!=null&&req.body.kind!=""&&req.body.kind!=undefined)
    condtion=condtion+" and A.kindId ="+req.body.kind;

    if(req.body.subKind!=null&&req.body.subKind!=""&&req.body.subKind!=undefined)
    condtion=condtion+" and A.subKindId ="+req.body.subKind;

    
    let conditionString=";";

    if(condtion.length>0){
        conditionString=" where "+condtion+conditionString;
    }
 let query="select A.*,B.id as stockId,IFNULL(B.quantity,0) as currentStock from product A left outer join opening_stock B on A.id=B.productId"
  
 let queryString=query+conditionString;
 connection
    .then(async connection => {
       let list=await connection.manager.query(queryString);

       return res.status(200).json({message:"Success",data:list})
    }).catch(err => {
        return res.status(200).json({message:"Success",Error:err})
    })
}
}