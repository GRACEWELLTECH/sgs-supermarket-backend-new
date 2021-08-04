import {Request, Response} from 'express';
import {getRepository} from 'typeorm'
import { Gst } from '../entity/Gst';


export class GstController{

    async CreateGst(req, res,next){

        let gst=new Gst();

        gst.name=req.body.name;
        gst.gst=req.body.gst;
        gst.status="active";

        getRepository(Gst).save(gst).then(savedObj=>{

            return res.json({ststus:200,success: true})
        }).catch(err=>{
            return res.json({ststus:400,Error:err})
        })
    }

    async getAllGst(req, res, next){
      
        getRepository(Gst).find().then(list=>{

            return res.json({ststus:200,data: list})
        }).catch(err=>{
            return res.json({ststus:400,Error:err})
        })
    }
    async getActiveGst(req, res, next){
      
        getRepository(Gst).find({where:{status:"active"}}).then(list=>{

            return res.json({ststus:200,data: list})
        }).catch(err=>{
            return res.json({ststus:400,Error:err})
        })
    }
    async activate(req, res, next){
      
        getRepository(Gst).findOne({where:{id:req.params.id}}).then(list=>{

            return res.json({ststus:200,data: list})
        }).catch(err=>{
            return res.json({ststus:400,Error:err})
        })
    }
   
}