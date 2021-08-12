import {Request, Response} from 'express';
import {connection} from "../../connection/Connection";
import {getRepository} from "typeorm";

import {Distributor} from "../../entity/Purchase/Distributer/DistributorMaster"

export class DistributorMasterController{
    async getDistributorMaster(req, res,next) {
      connection
                .then(async connection => {
                    const DistributorMasterList: Distributor[] = await connection.manager.find(Distributor);
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
                    let Type = new Distributor()
                    Type.approvalRequired = req.body.ApprovalRequired
                    Type.name = req.body.Name
                    Type.alternateName = req.body.AlternateName
                    Type.address = req.body.Address
                    Type.pincode = req.body.Pincode
                    Type.place = req.body.Place
                    Type.state = req.body.State
                    Type.Country = req.body.Country
                    Type.landline = req.body.OfficeLandline
                    // Type.SalesPersonName = req.body.SalesPersonName
                    // Type.SalesPersonMobile = req.body.SalesPersonMobile  
                    // Type.SalesPersonWhatsapp = req.body.SalesPersonWhatsapp
                    // Type.DeliveryPersonName = req.body.DeliveryPersonName
                    // Type.DeliveryPersonMobile = req.body.DeliveryPersonMobile
                    // Type.DeliveryPersonWhatsapp = req.body.DeliveryPersonWhatsapp
                    Type.email = req.body.EmailID
                    Type.inventoryType = req.body.InventoryType
                    Type.gstType = req.body.GSTType
                    Type.purchase = req.body.Purchase
                    Type.gstNumber = req.body.GSTNumber
                    Type.orderVsDeliveryType = req.body.OrderVsDeliveryType
                    await connection.manager.save(Type);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}
