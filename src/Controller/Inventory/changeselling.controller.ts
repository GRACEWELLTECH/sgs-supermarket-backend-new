import {Request, Response} from 'express';
import {connection} from "../../connection/Connection";
import {getRepository} from "typeorm";
import {changeselling} from "../../entity/Inventory/changeselling"
import {assemblykit} from "../../entity/Inventory/assemblykit_create"

export class changesellingController{
    async getChangeSelling(req, res,next) {
      connection
                .then(async connection => {
                    const changesellingList: changeselling[] = await connection.manager.find(changeselling);
                    res.json(changesellingList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async createChangeSelling(req, res,next) {
      connection
                .then(async connection => {
                    console.log(req.body)
                    let Type = new changeselling()
                    Type.UpdateRateBy = req.body.UpdateRateBy
                    Type.EnterPercentage = req.body.EnterPercentage
                    Type.RoundOffPaisa = req.body.RoundOffPaisa
                    
                    await connection.manager.save(Type);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}


