import { Router } from 'express';

import {DistributorMasterController} from '../Controller/Purchase/DistributorMastor.controller'

const purcheaseRouter=Router();

const distributer=new DistributorMasterController()

purcheaseRouter.post('/createDistributer',distributer.createDistributorMaster)
purcheaseRouter.get('/getDistributerList',distributer.getDistributorMaster)

export default purcheaseRouter;