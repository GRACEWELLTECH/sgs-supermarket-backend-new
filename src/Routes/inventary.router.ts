import { Router } from 'express'

import {itemVsEanController} from '../Controller/Inventory/itemVsEanController'
import {HsnVsGstController} from '../Controller/Inventory/HsnVsGst.controller'
import {AssemplyKitController} from '../Controller/Inventory/Assemply.controller'
import {GiftVouchercreateController} from '../Controller/Inventory/GiftVoucher_create'
import {RepackEntryController} from '../Controller/Inventory/REpackEntry.controller'
import OpeningStockController from '../Controller/Inventory/OpeningStockController'
import {WastageController} from '../Controller/Inventory/Wastage.controller'
import {StockController} from '../Controller/Inventory/StockController'
import {ReorderMaxminController} from '../Controller/Inventory/ReorderMaxmin.Controller'
const itemVsEan=new itemVsEanController()
const hsnVsGst=new HsnVsGstController()
const assemply=new AssemplyKitController()
const giftvoucher=new GiftVouchercreateController()
const repack=new RepackEntryController()
const openingStock=new OpeningStockController()
const wastage=new WastageController()
const stock=new StockController()
const minMax=new ReorderMaxminController()

const inventoryRouter = Router();

//Item Vs 
inventoryRouter.post('/assignItemVsEan',itemVsEan.createEan)
inventoryRouter.get('/getEanByItem/:id',itemVsEan.getEanByItem)

//Hsn Vs GST
inventoryRouter.post('/hsnVsGst',hsnVsGst.assignHsnVsGst)
inventoryRouter.get('/getHsnByGst/:gstId',hsnVsGst.getHSNbyGSt)
inventoryRouter.get('/getHsnByGst/:gstId',hsnVsGst.getHSNbyGSt)


//Assemply
inventoryRouter.post('/createAssemply',assemply.createAssemplykit)
inventoryRouter.get('/getAllAssemplykit',assemply.getAllAssemplyKit)
inventoryRouter.get('/getAssemplykitByType/:type',assemply.getAssemplyKitByType)
inventoryRouter.post('/prepareAssemply',assemply.prepareAssemblyKit)
inventoryRouter.get('/productsbyAssemply/:id',assemply.getAssemplyproducts)

//GiftVoucher
inventoryRouter.post('/createGiftVoucher',giftvoucher.createGiftVoucher)
inventoryRouter.get('/getGiftVoucher',giftvoucher.getGiftVoucher)
inventoryRouter.post('/claimGiftVoucher',giftvoucher.giftvoucherClaim)
inventoryRouter.post('/issueGiftVoucher',giftvoucher.giftvoucherIssue)


inventoryRouter.get('/getAllGiftVoucherClaim',giftvoucher.getAllGiftvoucherClaim)
inventoryRouter.get('/getGiftvoucherClaimById/:id',giftvoucher.getGiftvoucherClaimById)
inventoryRouter.get('/getAllGiftvoucherIssue',giftvoucher.getAllGiftvoucherIssue)
inventoryRouter.get('/getGiftvoucherIssueById/:id',giftvoucher.getGiftvoucherIssueById)


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

inventoryRouter.post('/saveRepackReuse',repack.saveRepackReuse)
inventoryRouter.get('/getRepackwithBulk',repack.getDetailsForReUse)
// openingStock
inventoryRouter.post('/saveOpeningStock',openingStock.saveOpeningStock)
inventoryRouter.get('/getProductsForOpeningStock',openingStock.getProductsForOpeningStock)
inventoryRouter.post('/filterProductsForOpeningStock',openingStock.filterProductsForOpeningStock)

// wastage
inventoryRouter.post('/saveWastage',wastage.saveWastage)

//stock update
inventoryRouter.post('/updateStock',stock.updateStock)
inventoryRouter.post('/UpdateMaxMin',minMax.UpdateMaxMin)



export default inventoryRouter;