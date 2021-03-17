import {ManufacturerController} from "../controller/manufactur.controller";
import {CategoryController} from "../controller/category.controller";
import {SubCategoryController} from "../controller/subCategory.controller";
import {ProductTypeController} from "../controller/productType.controller";
import {ProductSubTypeController} from "../controller/productSubType.controller";
import {KindController} from "../controller/kind.controller";
import {WeightUnitCobtroller} from "../controller/WeightUnit.controller";
import {ProductController} from "../controller/product.controller";
import { Router } from 'express';

let manufacturerController=new ManufacturerController()
let categoryController=new CategoryController();
let subCategoryController=new SubCategoryController();
let productTypeController=new ProductTypeController();
let productSubTypeController=new ProductSubTypeController();
let kindController=new KindController();
let weightUnitCobtroller=new WeightUnitCobtroller();
let productController=new ProductController();
const productRouter = Router();



productRouter.get('/catageory',categoryController.getCategory)
productRouter.post('/createCatageory',categoryController.CreateCategory)


productRouter.get('/subcategory',subCategoryController.getSubCategory)
productRouter.get('/subcategorybyCategory/:categoryId',subCategoryController.getSubCategorybyCategory)
productRouter.post('/createSubcategory',subCategoryController.createSubCategory)
  
productRouter.get('/getProductType',productTypeController.getProductType)
productRouter.post('/CreateProductType',productTypeController.CreateProductType)
  
productRouter.get('/getSubType',productSubTypeController.getSubType)
productRouter.get('/getSubTypeByType/:typeId',productSubTypeController.getSubTypeByType)
productRouter.post('/CreateSubType',productSubTypeController.CreateSubType)

productRouter.get('/getKind',kindController.getKind)
productRouter.post('/CreateKind',kindController.CreateKind)

productRouter.get('/getSubKind',kindController.getSubKind)
productRouter.get('/getSubKindByKind/:kind',kindController.getSubKindByKind)
productRouter.post('/CreateSubKind',kindController.CreateSubKind)

productRouter.get('/getWeightUnits',weightUnitCobtroller.getWeight)
productRouter.post('/createWeightUnit',weightUnitCobtroller.createWeight)
  
productRouter.get('/getManufacturer',manufacturerController.getManufacturer)
productRouter.post('/createManufacturer',manufacturerController.CreateManufacturer)
  
productRouter.get('/getBrand',manufacturerController.getBarand)
productRouter.get('/getBrandByManufacturer/:manufacturer',manufacturerController.getBarandsByManufacturer)
productRouter.post('/createBrand',manufacturerController.createBrand)
  
productRouter.get('/getProductList',productController.getProductList)
productRouter.post('/createProduct',productController.createProduct)
  




export default productRouter;