import { Router } from 'express';

import {DistributorMasterController} from '../Controller/Purchase/DistributorMastor.controller'
import {TransporterMasterController} from '../Controller/Purchase/TransporterMaster.conroller'

const purcheaseRouter=Router();
const distributer=new DistributorMasterController()
const transporter=new TransporterMasterController()

purcheaseRouter.post('/createDistributer',distributer.createDistributorMaster)
purcheaseRouter.get('/getDistributerList',distributer.getDistributorMaster)

purcheaseRouter.post('/createTransporterMaster',transporter.createTransporterMaster)
purcheaseRouter.get('/getTransporterMasterList',transporter.getTransporterMaster)



export default purcheaseRouter;

