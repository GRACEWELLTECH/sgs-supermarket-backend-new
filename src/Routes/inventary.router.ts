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
// REpack
inventoryRouter.post('/RepackTransfer',repack.RePackTransfer)
inventoryRouter.get('/getAllRepackTransfer',repack.getAllTransfer)
inventoryRouter.get('/getRepackTransferById/:id',repack.getTransferById)
inventoryRouter.get('/getAllStock',repack.getAllStock)
inventoryRouter.post('/stockUpdate',repack.stockUpdate)
inventoryRouter.get('/getREpackStockbyBulk/:id',repack.getREpackStockbyBulk)

//Repack-wastage
inventoryRouter.post('/RepackWastageEntry',repack.RepackWastageEntry)
inventoryRouter.get('/getAllRepackWastage',repack.getAllRepackWastage)
inventoryRouter.get('/getRepackWastageDetail/:id',repack.getRepackWastageDetail)

//Repack-weight-loss
inventoryRouter.post('/repackWeightLossEntry',repack.RepackWeightLossEntry)
inventoryRouter.get('/getAllRepackWeightLoss',repack.getAllRepackWeightLoss)
inventoryRouter.get('/getRepackWeightlossDetail/:id',repack.getRepackWeightlossDetail)

inventoryRouter.get('/getRepackwithBulk',repack.getDetailsForReUse)
export default inventoryRouter;