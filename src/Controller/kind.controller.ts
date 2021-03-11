import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {getRepository} from "typeorm";

import {Kind} from "../entity/Kind"
import {SubKind} from "../entity/SubKind"

export class KindController{
    async getKind(req, res,next) {
      connection
                .then(async connection => {
                    const CategoryList: Kind[] = await connection.manager.find(Kind);
                    res.json(CategoryList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async CreateKind(req, res,next) {
      connection
                .then(async connection => {
                    console.log(req.body)
                    let saveData = new Kind()
                    saveData.KindName = req.body.KindName
                    await connection.manager.save(saveData);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async getSubKind(req, res,next) {
      connection
                .then(async connection => {
                    const CategoryList: SubKind[] = await connection.manager.find(SubKind);
                    res.json(CategoryList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async CreateSubKind(req, res,next) {
      connection
                .then(async connection => {
                    console.log(req.body)
                    let kind = new SubKind()
                    kind.SubKindName = req.body.SubKindName
                    kind.kind = req.body.kind
                    await connection.manager.save(kind);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}


