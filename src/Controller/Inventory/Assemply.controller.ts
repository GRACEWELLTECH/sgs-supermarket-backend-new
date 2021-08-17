import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import {Assemblykit} from '../../entity/Inventory/assemblykit_create';

export class AssemplyKitController{

    async createAssemplykit(req,res,next){

        let newAssemply=new Assemblykit();
        newAssemply.KitName=req.body.KitName;
        newAssemply.KitType=req.body.KitType;
        newAssemply.validForm=req.body.validForm;
        newAssemply.validTill=req.body.validTill;
        newAssemply.validity=req.body.validity;
        newAssemply.validityUnit=req.body.validityUnit;

        getRepository(Assemblykit).save(newAssemply).then(savedObj=>{
            return res.status(200).json({message:"Saved Successfully",data:savedObj}); 
        }).catch(error=>{
            return res.status(400).json({error:error});
        })
    }

    async getAllAssemplyKit(req,res,next){

        getRepository(Assemblykit).find().then(list=>{
            return res.status(200).json({data:list});
        }).catch(error=>{
            return res.status(400).json({error:error});
        })
    }
}