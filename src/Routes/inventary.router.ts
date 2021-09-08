import { Router } from 'express'

import {itemVsEanController} from '../Controller/Inventory/itemVsEanController'
import {HsnVsGstController} from '../Controller/Inventory/HsnVsGst.controller'
import {AssemplyKitController} from '../Controller/Inventory/Assemply.controller'
import {GiftVouchercreateController} from '../Controller/Inventory/GiftVoucher_create'
import {RepackEntryController} from '../Controller/Inventory/REpackEntry.controller'

const itemVsEan=new itemVsEanController()
const hsnVsGst=new HsnVsGstController()
const assemply=new AssemplyKitController()
const giftvoucher=new GiftVouchercreateController()
const repack=new RepackEntryController()

const inventoryRouter = Router();

//Item Vs 
inventoryRouter.post('/assignItemVsEan',itemVsEan.createEan)

//Hsn Vs GST
inventoryRouter.post('/hsnVsGst',hsnVsGst.assignHsnVsGst)
inventoryRouter.get('/getHsnByGst/:gstId',hsnVsGst.getHSNbyGSt)
inventoryRouter.get('/getHsnByGst/:gstId',hsnVsGst.getHSNbyGSt)


//Assemply
inventoryRouter.post('/createAssemply',assemply.createAssemplykit)
inventoryRouter.get('/getAllAssemplykit',assemply.getAllAssemplyKit)
inventoryRouter.get('/getAssemplykitByType/:type',assemply.getAllAssemplyKit)
inventoryRouter.post('/prepareAssemply',assemply.prepareAssemblyKit)
inventoryRouter.get('/productsbyAssemply/:id',assemply.getAssemplyproducts)

//GiftVoucher
inventoryRouter.post('/createGiftVoucher',giftvoucher.createGiftVoucher)
inventoryRouter.get('/getGiftVoucher',giftvoucher.getGiftVoucher)
inventoryRouter.post('/claimGiftVoucher',giftvoucher.giftvoucherClaim)
inventoryRouter.post('/issueGiftVoucher',giftvoucher.giftvoucherIssue)

//repackEntryController
inventoryRouter.post('/repackEntry',repack.repackEntry)
inventoryRouter.get('/getAllRepack',repack.getAllRepack)
inventoryRouter.get('/getAllRepackEntry',repack.getAllRepackEntry)
inventoryRouter.get('/getRepackEntryByRepack/:id',repack.getRepackEntryByRepack)

export default inventoryRouter;