import { Router } from 'express'

import {itemVsEanController} from '../Controller/Inventory/itemVsEanController'
import {HsnVsGstController} from '../Controller/Inventory/HsnVsGst.controller'
import {AssemplyKitController} from '../Controller/Inventory/Assemply.controller'
import {GiftVouchercreateController} from '../Controller/Inventory/GiftVoucher_create'

const itemVsEan=new itemVsEanController()
const hsnVsGst=new HsnVsGstController()
const assemply=new AssemplyKitController()
const giftvoucher=new GiftVouchercreateController()

const inventoryRouter = Router();

inventoryRouter.post('/assignItemVsEan',itemVsEan.createEan)

inventoryRouter.post('/hsnVsGst',hsnVsGst.assignHsnVsGst)

inventoryRouter.get('/getHsnByGst/:gstId',hsnVsGst.getHSNbyGSt)

inventoryRouter.get('/getHsnByGst/:gstId',hsnVsGst.getHSNbyGSt)

inventoryRouter.post('/createAssemply',assemply.createAssemplykit)

inventoryRouter.post('/createGiftVoucher',giftvoucher.createGiftVoucher)

inventoryRouter.get('/getGiftVoucher',giftvoucher.getGiftVoucher)

inventoryRouter.get('/getAllAssemplykit',assemply.getAllAssemplyKit)

inventoryRouter.get('/getAssemplykitByType/:type',assemply.getAllAssemplyKit)

inventoryRouter.post('/prepareAssemply',assemply.prepareAssemblyKit)
inventoryRouter.get('/productsbyAssemply/:id',assemply.getAssemplyproducts)


export default inventoryRouter;