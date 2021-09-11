import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import {Assemblykit} from '../../entity/Inventory/assemblykit_create';
import {prepareAssemblyKit} from '../../entity/Inventory/assemblykit_prepare';

export class AssemplyKitController{

    async createAssemplykit(req,res,next){

        let newAssemply=new Assemblykit();
        newAssemply.KitName=req.body.KitName;
        newAssemply.KitType=req.body.KitType;
        newAssemply.validForm=req.body.validForm;
        newAssemply.validTill=req.body.validTill;
        newAssemply.validity=req.body.validity;
        newAssemply.validityUnit=req.body.validityUnit;
        newAssemply.status=true;

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
    async getAssemplyKitByType(req,res,next){

        getRepository(Assemblykit).find({where:{KitType:req.params.type}}).then(list=>{
            return res.status(200).json({data:list});
        }).catch(error=>{
            return res.status(400).json({error:error});
        })
    }

    async prepareAssemblyKit(req, res,next) {
       
       let  prepareArray:prepareAssemblyKit[]=[]
        req.body.product.forEach(prod=>{
            let assemply=new prepareAssemblyKit();
            assemply.assemply=req.body.assemply
            assemply.product=prod.product;
            assemply.quantity=prod.quantity;

            prepareArray.push(assemply);

        })

        getRepository(prepareAssemblyKit).save(prepareArray).then(savedObj=>{
                return res.status(200).json({data:savedObj});
        }).catch(error=>{
            return res.status(400).json({error:error});
        })
       
    }

    getAssemplyproducts(req,res,next){
        getRepository(prepareAssemblyKit).find({where:{assemply:req.params.id},relations:["product"]}).then(list=>{

            return res.status(200).json({data:list});
        }).catch(error=>{
            return res.status(400).json({error:error});
        })
    }
}