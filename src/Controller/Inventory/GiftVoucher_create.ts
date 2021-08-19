import {Request, Response} from 'express';
import {connection} from "../../connection/Connection";
import {getRepository} from "typeorm";

import {GiftVoucher} from "../../entity/Inventory/GiftVoucher_create"

export class GiftVouchercreateController{
    async getGiftVoucher(req, res,next) {
      connection
                .then(async connection => {
                    const GiftVoucherList: GiftVoucher[] = await connection.manager.find(GiftVoucher);
                    res.json(GiftVoucherList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async createGiftVoucher(req, res,next) {
      connection
                .then(async connection => {
                    console.log(req.body)
                    let Type = new GiftVoucher()
                    Type.name = req.body.name
                    Type.numberPrefix = req.body.numberPrefix
                    Type.startingNumber= req.body.startingNumber
                    Type.numberOfVouchers = req.body.numberOfVouchers
                    Type.value = req.body.value
                  
                    await connection.manager.save(Type);
                res.status(200).json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.status(400).json(error);
                }); 
      
    }
}


