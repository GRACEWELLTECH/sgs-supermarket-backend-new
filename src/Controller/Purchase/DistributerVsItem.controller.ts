import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import {DistributerVsItem} from '../../entity/Purchase/DistributerVsItem';

export class DistributerVsItemController{

    async assignDistributerVsItem(req,res,next){
       let dataList=req.body;
        let arrayTosave=[];
       for(let item of dataList){

          let newObj=new DistributerVsItem();
          newObj.distributer=item.distributer;
          newObj.product=item.product;

          arrayTosave.push(newObj);
       }

       getRepository(DistributerVsItem).save(arrayTosave).then(result=>{
        return res.status(200).json({data:result})
       }).catch(error=>{
        return res.status(400).json({Error:error})
       })
    }

    async getItemByDistributer(req,res,next){
        getRepository(DistributerVsItem).find({where:{distributer:req.params.id}}).then(result=>{
            return res.status(200).json({data:result})
           }).catch(error=>{
            return res.status(400).json({Error:error})
           })
    }
}