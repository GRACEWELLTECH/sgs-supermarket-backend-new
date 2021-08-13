import {json, Request, Response} from 'express';
import {connection} from "../../connection/Connection";
import {getRepository} from "typeorm";

import {Distributor} from "../../entity/Purchase/Distributer/DistributorMaster"
import {DistributerDeliveryPersion} from "../../entity/Purchase/Distributer/DistributerDeliveryPerson"
import {DistributerSalesPersion} from "../../entity/Purchase/Distributer/DistributerSalespersion"
import {DistributerLandline} from "../../entity/Purchase/Distributer/DistributerLandline"
import {DistributerMail} from "../../entity/Purchase/Distributer/DistributerMail"
import {OrderVsDelivery} from "../../entity/Purchase/Distributer/OrderVsDelivery"

export class DistributorMasterController{
    async getDistributorMaster(req, res,next) {
     
        let repo=getRepository(Distributor);
        repo.find({relations:['landline','email','salesPerson','deliveryPerson','OrderVsDelivery']}).then(list=>{
            res.status(200).json({data:list});
            next();
        }).catch(error=>{
            res.status(400).json({error:error});
            next();
        })
    }
    async createDistributorMaster(req, res,next) {

                   
                    let Type = new Distributor()
                    Type.approvalRequired = req.body.approvalRequired
                    Type.name = req.body.name
                    Type.alternateName = req.body.alternateName
                    Type.address = req.body.address
                    Type.pincode = req.body.pincode
                    Type.place = req.body.place
                    Type.state = req.body.state
                    Type.Country = req.body.Country
                    Type.inventoryType = req.body.inventoryType
                    Type.gstType = req.body.gstType
                    Type.purchase = req.body.purchase
                    Type.gstNumber = req.body.gstNumber
                    Type.landline = req.body.landline
                    Type.email = req.body.email
                    Type.orderVsDeliveryType = req.body.orderVsDeliveryType
                 
                    let repo=getRepository(Distributor)
                    let salesRepo=getRepository(DistributerSalesPersion)
                    let deleveryRepo=getRepository(DistributerDeliveryPersion)
                    let mailrepo=getRepository(DistributerMail)
                    let landlineRepo=getRepository(DistributerLandline)
                    let orderRepo=getRepository(OrderVsDelivery)

                    repo.save(Type).then(async(distributer)=>{

                        let mailArray:DistributerMail[]=[]
                        req.body.email.forEach(mail=>{
                            let email=new DistributerMail();

                            email={...mail,distributer:distributer.id}
                            mailArray.push(email);
                        })
                        
                        await mailrepo.save(mailArray)

                        let landlineArray:DistributerLandline[]=[]
                        req.body.landline.forEach(line=>{
                            let landline=new DistributerLandline();

                            landline={...line,distributer:distributer.id}
                            landlineArray.push(landline);
                        })
                        await landlineRepo.save(landlineArray)

                        let salesArray:DistributerSalesPersion[]=[];
                        req.body.salesPerson.forEach(sales=>{
                            let newSale=new DistributerSalesPersion();

                            newSale={...sales,distributer:distributer.id}
                            salesArray.push(newSale);
                        })

                        await salesRepo.save(salesArray)

                        let deliveryArray:DistributerDeliveryPersion[]=[];
                        req.body.deliveryPerson.forEach(delivery=>{
                            let del=new DistributerDeliveryPersion()
                            del={...delivery,distributer:distributer.id};
                            deliveryArray.push(del);

                        })

                        await deleveryRepo.save(deliveryArray)

                        let orderArray:OrderVsDelivery[]=[];

                        req.body.orderDay.forEach(order => {
                            let newOrder=new OrderVsDelivery();
                            newOrder={...order,distributer:distributer.id}
                            orderArray.push(newOrder);
                        })

                        await orderRepo.save(orderArray)


                        res.status(200).json({message:"Data saved Successfully"})

                    }).catch(error => {
                        res.status(400).json({message:"Data saved Successfully"})

                    })
      
    }
}
