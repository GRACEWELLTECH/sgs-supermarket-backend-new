import {ManufacturerController} from "../Controller/manufactur.controller";
import {CategoryController} from "../Controller/category.controller";
import {SubCategoryController} from "../Controller/subCategory.controller";
import {ProductTypeController} from "../Controller/productType.controller";
import {ProductSubTypeController} from "../Controller/productSubType.controller";
import {KindController} from "../Controller/kind.controller";
import {WeightUnitCobtroller} from "../Controller/WeightUnit.controller";
import {ProductController} from "../Controller/product.controller";
import {GstController} from "../Controller/GstController";
import { Router } from 'express';

let manufacturerController=new ManufacturerController()
let categoryController=new CategoryController();
let subCategoryController=new SubCategoryController();
let productTypeController=new ProductTypeController();
let productSubTypeController=new ProductSubTypeController();
let kindController=new KindController();
let weightUnitCobtroller=new WeightUnitCobtroller();
let productController=new ProductController();
let gstController=new GstController();
const productRouter = Router();



productRouter.get('/catageory',categoryController.getCategory)
productRouter.post('/createCatageory',categoryController.CreateCategory)
productRouter.put('/updateCategory/:id',categoryController.updateCategory)


productRouter.get('/subcategory',subCategoryController.getSubCategory)
productRouter.get('/subcategorybyCategory/:categoryId',subCategoryController.getSubCategorybyCategory)
productRouter.post('/createSubcategory',subCategoryController.createSubCategory)
productRouter.put('/updateSubCategory/:id',subCategoryController.updateSubCategory)
  
productRouter.get('/getProductType',productTypeController.getProductType)
productRouter.get('/getProductTypeBySubCategory/:id',productTypeController.getProductTypeBySubCategory)
productRouter.post('/CreateProductType',productTypeController.CreateProductType)
  
productRouter.get('/getSubType',productSubTypeController.getSubType)
productRouter.get('/getSubTypeByType/:typeId',productSubTypeController.getSubTypeByType)
productRouter.post('/CreateSubType',productSubTypeController.CreateSubType)

productRouter.get('/getKind',kindController.getKind)
productRouter.get('/getKindBySubType/:id',kindController.getKindBuSubType)
productRouter.post('/CreateKind',kindController.CreateKind)

productRouter.get('/getSubKind',kindController.getSubKind)
productRouter.get('/getSubKindByKind/:id',kindController.getSubKindByKind)
productRouter.post('/CreateSubKind',kindController.CreateSubKind)

productRouter.get('/getWeightUnits',weightUnitCobtroller.getWeight)
productRouter.post('/createWeightUnit',weightUnitCobtroller.createWeight)
  
productRouter.get('/getManufacturer',manufacturerController.getManufacturer)
productRouter.post('/createManufacturer',manufacturerController.CreateManufacturer)
  
productRouter.get('/getBrand',manufacturerController.getBarand)
productRouter.get('/getBrandByManufacturer/:manufacturer',manufacturerController.getBarandsByManufacturer)
productRouter.post('/createBrand',manufacturerController.createBrand)
productRouter.post('/assignManufacturerVsBrand',manufacturerController.AssaignManufacturerVsBrand)
  
productRouter.get('/getProductList',productController.getProductList)
productRouter.get('/getProduct/:id',productController.getProductById)
productRouter.post('/createProduct',productController.createProduct)
productRouter.put('/updateProduct/:id',productController.updateProduct)

productRouter.get('/getAllBulkProducts',productController.getAllBulkProducts)
productRouter.get('/getAllRepackageProducts',productController.getAllRepackageProducts)
productRouter.post('/filterProducts',productController.filterProducts)
productRouter.get('/searchproduct/:productName',productController.searchProducts)

//GST Master Service

productRouter.post('/createGst',gstController.CreateGst)
productRouter.get('/getAllGst',gstController.getAllGst)
productRouter.get('/getActiveGst',gstController.getActiveGst)
  




export default productRouter;