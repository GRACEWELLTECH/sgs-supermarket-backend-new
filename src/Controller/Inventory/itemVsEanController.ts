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

   async getEanByItem(req, res,next){
            getRepository(ItemVsEan).find({where:{productId:req.params.id}}).then(list => {
                return res.status(200).json({message: 'Success',data:list});
            }).catch(err => {
                return res.status(400).json({message: 'Errror',Error:err});
            })
    }
}