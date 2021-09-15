import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {getRepository} from "typeorm";

import {Manufacturer} from "../entity/Manufacturer"
import {Brand} from "../entity/Brand"
import ManufacyturerVsBrand from "../entity/ManufacturerVsBrand"

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
    async getBarandsByManufacturer(req, res,next) {
     let repo=getRepository(ManufacyturerVsBrand)
      repo.find({where:{manufacturer:req.params.manufacturer},relations:["manufacturer","brand"]}).then((result) => {

        return res.status(200).json({data:result});
      }).catch((error) => {
        return res.status(400).json({error:error});
      })
    }
    async createBrand(req, res,next) {
      connection
                .then(async connection => {
                   
                    let Type = new Brand()
                    Type.BrandName = req.body.BrandName;
                    Type.address = req.body.address;

                    await connection.manager.save(Type);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }

    async AssaignManufacturerVsBrand(req, res,next) {
        let repo=getRepository(ManufacyturerVsBrand);

       
        let saveArray:ManufacyturerVsBrand[]=[];

        req.body.brand.forEach(brand => {
            let saveObj=new ManufacyturerVsBrand();
            saveObj ={manufacturer:req.body.manufacturer,...brand};
            saveArray.push(saveObj);
        })

        repo.save(saveArray).then(saved=>{
return res.status(200).json({success:"Datas saved Successfully" })
        }).catch(error=>{
            return res.status(400).json({error:error })
        })




    }
   
}


