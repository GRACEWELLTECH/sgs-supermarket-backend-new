import {Request, Response} from 'express';
import {getRepository} from 'typeorm'
import {connection} from  '../../connection/Connection'

import {ItemVsEan} from '../../entity/Inventory/ItemVsEan'

export class itemVsEanController{

    async createEan(req, res,next){

        let eanList=req.body.ean
let savearray:ItemVsEan[]=[];
        eanList.forEach(item => {
            let ean=new ItemVsEan()

            ean={...item,productId:req.body.productId,}
            savearray.push(ean)
        })

        let repo=getRepository(ItemVsEan)

        repo.save(savearray).then(list => {
            return res.json({status:200,data:list})
        })

    }
}