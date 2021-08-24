import { Router } from 'express';

import {DistributorMasterController} from '../Controller/Purchase/DistributorMastor.controller'
import {TransporterMasterController} from '../Controller/Purchase/TransporterMaster.conroller'
import {CategoryVsBrandController} from '../Controller/Purchase/categtoryVsBrand.controller'

const purcheaseRouter=Router();
const distributer=new DistributorMasterController()
const transporter=new TransporterMasterController()
const catVsBrand=new CategoryVsBrandController()

purcheaseRouter.post('/createDistributer',distributer.createDistributorMaster)
purcheaseRouter.get('/getDistributerList',distributer.getDistributorMaster)
purcheaseRouter.post('/assignCategoryVsBrand',catVsBrand.asssignCategoryVsBrand)

purcheaseRouter.post('/createTransporterMaster',transporter.createTransporterMaster)
purcheaseRouter.get('/getTransporterMasterList',transporter.getTransporterMaster)



export default purcheaseRouter;

