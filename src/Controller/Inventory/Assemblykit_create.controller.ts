import {Request, Response} from 'express';
import {connection} from "../../connection/Connection";
import {getRepository} from "typeorm";

import {assemblykit} from "../../entity/Inventory/assemblykit_create"

export class assemblykitcreateController{
    async getAsmKitCreate(req, res,next) {
      connection
                .then(async connection => {
                    const AsmKitCreateList: assemblykit[] = await connection.manager.find(assemblykit);
                    res.json(AsmKitCreateList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async createAsmKitCreate(req, res,next) {
      connection
                .then(async connection => {
                    console.log(req.body)
                    let Type = new assemblykit()
                    Type.KitType = req.body.KitType
                    Type.KitName = req.body.KitName
                    Type.ValidForm = req.body.ValidForm
                    Type.ValidTill = req.body.ValidTill
                    Type.ValidTillCalculation = req.body.ValidTillCalculation
                    Type.Day = req.body.Day
                    await connection.manager.save(Type);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}


