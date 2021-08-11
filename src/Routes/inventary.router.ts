import { Router } from 'express'

import {itemVsEanController} from '../Controller/Inventory/itemVsEanController'
import {HsnVsGstController} from '../Controller/Inventory/HsnVsGst.controller'

const itemVsEan=new itemVsEanController()
const hsnVsGst=new HsnVsGstController()

const inventoryRouter = Router();

inventoryRouter.post('/assignItemVsEan',itemVsEan.createEan)

inventoryRouter.post('/hsnVsGst',hsnVsGst.assignHsnVsGst)

inventoryRouter.get('/getHsnByGst/:gstId',hsnVsGst.getHSNbyGSt)


export default inventoryRouter;