import { Router } from 'express';

import {DistributorMasterController} from '../Controller/Purchase/DistributorMastor.controller'
import {TransporterMasterController} from '../Controller/Purchase/TransporterMaster.conroller'
import {CategoryVsBrandController} from '../Controller/Purchase/categtoryVsBrand.controller'
import {CategoryVsManufacturerController} from '../Controller/Purchase/categoryVSManufacturer.controller'
import {DistributerVsManufacturerController} from '../Controller/Purchase/DistributerVsManufacturer.controller'

const purcheaseRouter=Router();
const distributer=new DistributorMasterController()
const transporter=new TransporterMasterController()
const catVsBrand=new CategoryVsBrandController()
const catVsManu=new CategoryVsManufacturerController()
const distributerVsManufacturer=new DistributerVsManufacturerController()

purcheaseRouter.post('/createDistributer',distributer.createDistributorMaster)
purcheaseRouter.get('/getDistributerList',distributer.getDistributorMaster)

// catVsBrand
purcheaseRouter.post('/assignCategoryVsBrand',catVsBrand.asssignCategoryVsBrand)
purcheaseRouter.post('/getbrandbycategory',catVsBrand.getbrandVbycategory)
// catVsManufacturer
purcheaseRouter.post('/assignCategoryVsManufacturer',catVsManu.asssignCategoryVsManufacturer)
purcheaseRouter.post('/getManufacturerbycategory',catVsManu.getCategoryVsManufacturer)

purcheaseRouter.post('/createTransporterMaster',transporter.createTransporterMaster)
purcheaseRouter.get('/getTransporterMasterList',transporter.getTransporterMaster)

//DistributervsManufacturer
purcheaseRouter.post('/assignDistributervsManufacturer',distributerVsManufacturer.assignDistributervsManufacturer)
purcheaseRouter.get('/getManufacturerByDistributer/:id',distributerVsManufacturer.getManufacturerByDistributer)



export default purcheaseRouter;

