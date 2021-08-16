import {Request, Response} from 'express';
import {connection} from "../../connection/Connection";
import {getRepository} from "typeorm";

import {TransporterMaster} from "../../entity/Purchase/TransporterMaster"

export class TransporterMasterController{
    async getTransporterMaster(req, res,next) {
      connection
                .then(async connection => {
                    const TransporterMasterList: TransporterMaster[] = await connection.manager.find(TransporterMaster);
                    res.json(TransporterMasterList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async createTransporterMaster(req, res,next) {
      connection
                .then(async connection => {
                    console.log(req.body)
                    let Type = new TransporterMaster()
               
                    Type.nameTransporter  = req.body.nameTransporter
                    Type.address = req.body.address
                
                    await connection.manager.save(Type);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}
