import {Request, Response} from 'express';
import {connection} from "../../connection/Connection";
import {getRepository} from "typeorm";

import {DistributorMaster} from "../../entity/Purchase/DistributorMaster"

export class DistributorMasterController{
    async getDistributorMaster(req, res,next) {
      connection
                .then(async connection => {
                    const DistributorMasterList: DistributorMaster[] = await connection.manager.find(DistributorMaster);
                    res.json(DistributorMasterList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async createDistributorMaster(req, res,next) {
      connection
                .then(async connection => {
                    console.log(req.body)
                    let Type = new DistributorMaster()
                    Type.ApprovalRequired = req.body.ApprovalRequired
                    Type.Name = req.body.Name
                    Type.AlternateName = req.body.AlternateName
                    Type.Address = req.body.Address
                    Type.Pincode = req.body.Pincode
                    Type.Place = req.body.Place
                    Type.State = req.body.State
                    Type.Country = req.body.Country
                    Type.OfficeLandline = req.body.OfficeLandline
                    Type.SalesPersonName = req.body.SalesPersonName
                    Type.SalesPersonMobile = req.body.SalesPersonMobile  
                    Type.SalesPersonWhatsapp = req.body.SalesPersonWhatsapp
                    Type.DeliveryPersonName = req.body.DeliveryPersonName
                    Type.DeliveryPersonMobile = req.body.DeliveryPersonMobile
                    Type.DeliveryPersonWhatsapp = req.body.DeliveryPersonWhatsapp
                    Type.EmailID = req.body.EmailID
                    Type.InventoryType = req.body.InventoryType
                    Type.GSTType = req.body.GSTType
                    Type.Purchase = req.body.Purchase
                    Type.GSTNumber = req.body.GSTNumber
                    Type.OrderVsDeliveryType = req.body.OrderVsDeliveryType
                    await connection.manager.save(Type);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}
