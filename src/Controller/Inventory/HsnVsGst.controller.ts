import {Request, Response} from 'express';
import {getRepository} from 'typeorm'
import {connection} from  '../../connection/Connection'

import {HsnVsGst} from '../../entity/Inventory/HsnVsGst'

export class HsnVsGstController{

    async assignHsnVsGst(req,res,next){

        
        let hsnlist=req.body.hsn
        let saveList:HsnVsGst[]=[];

        hsnlist.forEach(hsn =>{
            let newObj=new HsnVsGst;
            newObj={...hsn,gstId:req.body.gstId};
            saveList.push(newObj);
        })

        let repo=getRepository(HsnVsGst);
        repo.save(saveList).then(savedObj=>{
            return res.status(200).json({data:savedObj});
        }).catch(err=>{
            return res.status(400).json({err:err});
        })



    }
    async getHSNbyGSt(req,res,next){

        let repo=getRepository(HsnVsGst);

        repo.find({where:{gstId:req.params.gstId}}).then(list=>{
           
            return res.status(200).json({data:list});
       
        }).catch(err=>{
            return res.status(400).json({err:err});
        })
      
        
          
      


    }
}