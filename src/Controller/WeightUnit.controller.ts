import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {getRepository} from "typeorm";

import {WeightUnit} from "../entity/WeightUnit"

export class WeightUnitCobtroller{
    async getWeight(req, res,next) {
      connection
                .then(async connection => {
                    const unitList: WeightUnit[] = await connection.manager.find(WeightUnit);
                    res.json(unitList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async createWeight(req, res,next) {
      connection
                .then(async connection => {
                    console.log(req.body)
                    let category = new WeightUnit()
                    category.UnitName = req.body.UnitName
                    category.abbreviation = req.body.abbreviation
                    await connection.manager.save(category);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}


