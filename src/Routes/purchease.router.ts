import { Router } from 'express';

import {DistributorMasterController} from '../Controller/Purchase/DistributorMastor.controller'
import {CategoryVsBrandController} from '../Controller/Purchase/categtoryVsBrand.controller'

const purcheaseRouter=Router();

const distributer=new DistributorMasterController()
const catVsBrand=new CategoryVsBrandController()

purcheaseRouter.post('/createDistributer',distributer.createDistributorMaster)
purcheaseRouter.get('/getDistributerList',distributer.getDistributorMaster)
purcheaseRouter.post('/assignCategoryVsBrand',catVsBrand.asssignCategoryVsBrand)

export default purcheaseRouter;