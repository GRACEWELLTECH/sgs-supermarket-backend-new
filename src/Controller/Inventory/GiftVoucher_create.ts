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
                    Type.VoucherName = req.body.VoucherName
                    Type.VoucherNumberPrefix = req.body.VoucherNumberPrefix
                    Type.StartingNumber= req.body.StartingNumber
                    Type.NumberOfVouchers = req.body.NumberOfVouchers
                    Type.Vouchers = req.body.Vouchers
                  
                    await connection.manager.save(Type);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}


