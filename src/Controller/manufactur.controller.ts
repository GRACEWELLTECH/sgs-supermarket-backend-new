import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {getRepository} from "typeorm";

import {Manufacturer} from "../entity/Manufacturer"
import {Brand} from "../entity/Brand"

export class ManufacturerController{
    async getManufacturer(req, res,next) {
      connection
                .then(async connection => {
                    const typeList: Manufacturer[] = await connection.manager.find(Manufacturer);
                    res.json(typeList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async CreateManufacturer(req, res,next) {
      connection
                .then(async connection => {
                   
                    let Type = new Manufacturer()
                    Type.manufacturerName = req.body.manufacturerName;
                    Type.address = req.body.address;

                    await connection.manager.save(Type);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }

    async getBarand(req, res,next) {
      connection
                .then(async connection => {
                    const typeList: Brand[] = await connection.manager.find(Brand);
                    res.json(typeList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async createBrand(req, res,next) {
      connection
                .then(async connection => {
                   
                    let Type = new Brand()
                    Type.BrandName = req.body.BrandName;
                    Type.Manufacturer = req.body.Manufacturer;

                    await connection.manager.save(Type);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}


