import {Request, Response} from 'express';
import {connection} from "../../connection/Connection";
import {getRepository} from "typeorm";

import {GiftVoucher} from "../../entity/Inventory/GiftVoucher_create"
import {GiftvoucherClaim} from "../../entity/Inventory/GiftVoucher_claim"
import {GiftvoucherIssue} from "../../entity/Inventory/GiftVoucher_issue"

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


    async giftvoucherClaim(req: Request, res: Response) {

        var voucherId=req.body.voucherId;
        var basedOn=req.body.basedOn;

        var products=req.body.products;
           var arrayToSave=[]
        products.forEach(product => {
            let newClaim=new GiftvoucherClaim();

            newClaim.giftVoucher=voucherId
            newClaim.basedOn=basedOn
            newClaim.product=product.productId
            newClaim.allowLoyalty=product.allowLoyalty
            arrayToSave.push(newClaim)

        })

        getRepository(GiftvoucherClaim).save(arrayToSave).then(savedArray=>{

            return res.status(200).json({message:"success",data:savedArray});
        }).catch(error=>{
            return res.status(400).json({message:"error",error:error});
        })
    }
    async giftvoucherIssue(req: Request, res: Response) {

        var voucherId=req.body.voucherId;
        var basedOn=req.body.basedOn;

        var products=req.body.products;
           var arrayToSave=[]
        products.forEach(product => {
            let newClaim=new GiftvoucherIssue();

            newClaim.giftVoucher=voucherId
            newClaim.basedOn=basedOn
            newClaim.product=product.productId
            newClaim.allowLoyalty=product.allowLoyalty
            arrayToSave.push(newClaim)

        })

        getRepository(GiftvoucherIssue).save(arrayToSave).then(savedArray=>{

            return res.status(200).json({message:"success",data:savedArray});
        }).catch(error=>{
            return res.status(400).json({message:"error",error:error});
        })
    }
}


