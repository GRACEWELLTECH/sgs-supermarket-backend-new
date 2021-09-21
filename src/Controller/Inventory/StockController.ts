import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import {Stock} from '../../entity/Inventory/stock'


export class StockController{
    async updateStock(req, res,next){
        let data=req.body;
        console.log("data",data)
    let storeArray=[] ;

   for(let item of data){
            let stockObj=await getRepository(Stock).findOne({ean:item.eanId});

            if(stockObj==undefined){
                stockObj=new Stock();
                stockObj.ean=item.eanId;
                stockObj.shop=item.quantity
            }else{
                stockObj.shop+=parseInt(item.quantity);
            }
            
            console.log("stockObj",stockObj)
            storeArray.push(stockObj)
        }
        console.log("storeArray",storeArray)
        getRepository(Stock).save(storeArray).then(result=>{

            return res.status(200).json({data:result})
        }).catch(error=>{
            return res.status(400).json({Error:error})
        })
    }
}
