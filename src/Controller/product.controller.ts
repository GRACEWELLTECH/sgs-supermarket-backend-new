import {json, Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {getRepository, Like} from "typeorm";

import Product from "../entity/Product"
import { count } from 'console';

export class ProductController{
    async getProductList(req, res,next) {
      connection
                .then(async connection => {
                    const CategoryList: Product[] = await connection.manager.find(Product);
                    res.json(CategoryList);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async getProductById(req, res,next) {
      connection
                .then(async connection => {
                    const foundProduct: Product = await connection.manager.findOne(Product,{id:req.params.id});
                    res.json(foundProduct);
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
    async createProduct(req, res,next) {
     
        let product = req.body
        let newproduct=new Product();
            newproduct.productName=product.productName;
            newproduct.shortName=product.shortName?product.shortName:"";
            newproduct.weight=product.weight?product.weight:0;
            newproduct.weightUnit=product.weightUnit?product.weightUnit:0;
            newproduct.category=product.category?product.category:null;
            newproduct.subCategory=product.subCategory?product.subCategory:null;
            newproduct.type=product.type?product.type:null;
            newproduct.subType=product.subType?product.subType:null;
            newproduct.kind=product.kind?product.kind:null;
            newproduct.subKind=product.subKind?product.subKind:null;
            newproduct.manufacturer=product.manufacturer?product.manufacturer:null;
            newproduct.brand=product.brand?product.brand:null;
            newproduct.distributerType=product.distributerType?product.distributerType:"";
            newproduct.agency=product.agency?product.agency:null;
            newproduct.purcheaser=product.purcheaser;
            newproduct.active=product.active;
            newproduct.GST=product.GST;
            newproduct.hsnNumber=product.hsnNumber;
            newproduct.preparationStatus=product.preparationStatus?product.preparationStatus:"";
            newproduct.bulkProduct=product.bulkProduct?product.bulkProduct:"";
            newproduct.rePackageWeight=product.rePackageWeight?product.rePackageWeight:0;
            newproduct.allowDecimal=product.allowDecimal;
            newproduct.numberOfDecimalPoints=product.numberOfDecimalPoints?product.numberOfDecimalPoints:0;
            newproduct.alowNegativeStock=product.alowNegativeStock;
            newproduct.alowSellingStockEdit=product.alowSellingStockEdit;
            newproduct.allowLoyalty=product.allowLoyalty;
            newproduct.allowMRPSelection=product.allowMRPSelection;
            newproduct.maintainExpDate=product.maintainExpDate;
            newproduct.sellingRateLessthenLandingCost=product.sellingRateLessthenLandingCost;
            newproduct.maintainSellingRateBy=product.maintainSellingRateBy?product.maintainSellingRateBy:"";
            newproduct.minimumSellingQuantity=product.minimumSellingQuantity?product.minimumSellingQuantity:0;
            newproduct.curserDefaultFocusIn=product.curserDefaultFocusIn?product.curserDefaultFocusIn:"";
            newproduct.barcodeGenerationProfile=product.barcodeGenerationProfile?product.barcodeGenerationProfile:"";
            newproduct.applicableForOnlineSale=product.applicableForOnlineSale;
            newproduct.color=product.color?product.color:"";
            newproduct.onlineType=product.onlineType?product.onlineType:"";
            newproduct.allowExchange=product.allowExchange;
            newproduct.warrenty=product.warrenty?product.warrenty:0;
            newproduct.warrentyUnit=product.warrentyUnit?product.warrentyUnit:"";
            newproduct.masterGodownStackMin=product.masterGodownStackMin;
            newproduct.masterGodownStackMax=product.masterGodownStackMax;
            newproduct.storeStackMin=product.storeStackMin;
            newproduct.storeStackMax=product.storeStackMax;
            newproduct.rackStackMin=product.rackStackMin;
            newproduct.rackStackMax=product.rackStackMax;
      //additional fields
      newproduct.updateRetailPriceOldStock=req.body.updateRetailPriceOldStock;
      newproduct.warrantyAvailable=req.body.warrantyAvailable;
      newproduct.expire=req.body.expire;
      newproduct.expireUnit=req.body.expireUnit;
     
      newproduct.rackFloor=req.body.rackFloor;
      newproduct.rackRackNo=req.body.rackRackNo;
      newproduct.rackShelfNo=req.body.rackShelfNo;
      newproduct.rackBoxNo=req.body.rackBoxNo;
      newproduct.storeFloor=req.body.storeFloor;
      newproduct.storeRackNo=req.body.storeRackNo;
      newproduct.storeShelfNo=req.body.storeShelfNo;
      newproduct.storeBoxNo=req.body.storeBoxNo;
      newproduct.godownFloor=req.body.godownFloor;
      newproduct.godownRackNo=req.body.godownRackNo;
      newproduct.godownShelfNo=req.body.godownShelfNo;
      newproduct.godownBoxNo=req.body.godownBoxNo;
      newproduct.agencyPurchaser=req.body.agencyPurchaser;
      newproduct.caseContains=req.body.caseContains;
      newproduct.miniumOrderQuantity=req.body.miniumOrderQuantity;

     
        connection.then(async connection => {
                    console.log(req.body)
                   
                    await connection.manager.save(newproduct);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.status(400).json(error);
                }); 
      
    }
    async updateProduct(req, res,next) {
        try{
       
        let productrepo= getRepository(Product);
        let product = req.body;
        console.log("body",product)
        let selectedProduct=await productrepo.findOne(req.params.id);
        

        selectedProduct.productName=product.productName;
        selectedProduct.shortName=product.shortName?product.shortName:"";
        selectedProduct.weight=product.weight?product.weight:0;
        selectedProduct.weightUnit=product.weightUnit?product.weightUnit:0;
        selectedProduct.category=product.category?product.category:0;
        selectedProduct.subCategory=product.subCategory?product.subCategory:0;
        selectedProduct.type=product.type?product.type:0;
        selectedProduct.subType=product.subType?product.subType:0;
        selectedProduct.kind=product.kind?product.kind:0;
        selectedProduct.subKind=product.subKind?product.subKind:0;
        selectedProduct.manufacturer=product.manufacturer?product.manufacturer:0;
        selectedProduct.brand=product.brand?product.brand:0;
        selectedProduct.distributerType=product.distributerType?product.distributerType:"";
        selectedProduct.agency=product.agency?product.agency:0;
        selectedProduct.purcheaser=product.purcheaser;
        selectedProduct.active=product.active;
        selectedProduct.GST=product.GST;
        selectedProduct.hsnNumber=product.hsnNumber;
        selectedProduct.preparationStatus=product.preparationStatus?product.preparationStatus:"";
        selectedProduct.bulkProduct=product.bulkProduct?product.bulkProduct:"";
        selectedProduct.rePackageWeight=product.rePackageWeight?product.rePackageWeight:0;
        selectedProduct.allowDecimal=product.allowDecimal;
        selectedProduct.numberOfDecimalPoints=product.numberOfDecimalPoints?product.numberOfDecimalPoints:0;
        selectedProduct.alowNegativeStock=product.alowNegativeStock;
        selectedProduct.alowSellingStockEdit=product.alowSellingStockEdit;
        selectedProduct.allowLoyalty=product.allowLoyalty;
        selectedProduct.allowMRPSelection=product.allowMRPSelection;
        selectedProduct.maintainExpDate=product.maintainExpDate;
        selectedProduct.sellingRateLessthenLandingCost=product.sellingRateLessthenLandingCost;
        selectedProduct.maintainSellingRateBy=product.maintainSellingRateBy?product.maintainSellingRateBy:"";
        selectedProduct.minimumSellingQuantity=product.minimumSellingQuantity?product.minimumSellingQuantity:0;
        selectedProduct.curserDefaultFocusIn=product.curserDefaultFocusIn?product.curserDefaultFocusIn:"";
        selectedProduct.barcodeGenerationProfile=product.barcodeGenerationProfile?product.barcodeGenerationProfile:"";
        selectedProduct.applicableForOnlineSale=product.applicableForOnlineSale;
        selectedProduct.color=product.color?product.color:"";
        selectedProduct.onlineType=product.onlineType?product.onlineType:"";
        selectedProduct.allowExchange=product.allowExchange;
        selectedProduct.warrenty=product.warrenty?product.warrenty:0;
        selectedProduct.warrentyUnit=product.warrentyUnit?product.warrentyUnit:"";
        selectedProduct.masterGodownStackMin=product.masterGodownStackMin;
        selectedProduct.masterGodownStackMax=product.masterGodownStackMax;
        selectedProduct.storeStackMin=product.storeStackMin;
        selectedProduct.storeStackMax=product.storeStackMax;
        selectedProduct.rackStackMin=product.rackStackMin;
        selectedProduct.rackStackMax=product.rackStackMax;
  //additional
   //additional fields
   selectedProduct.updateRetailPriceOldStock=req.body.updateRetailPriceOldStock;
   selectedProduct.warrantyAvailable=req.body.warrantyAvailable;
   selectedProduct.expire=req.body.expire;
   selectedProduct.expireUnit=req.body.expireUnit;
  
   selectedProduct.rackFloor=req.body.rackFloor;
   selectedProduct.rackRackNo=req.body.rackRackNo;
   selectedProduct.rackShelfNo=req.body.rackShelfNo;
   selectedProduct.rackBoxNo=req.body.rackBoxNo;
   selectedProduct.storeFloor=req.body.storeFloor;
   selectedProduct.storeRackNo=req.body.storeRackNo;
   selectedProduct.storeShelfNo=req.body.storeShelfNo;
   selectedProduct.storeBoxNo=req.body.storeBoxNo;
   selectedProduct.godownFloor=req.body.godownFloor;
   selectedProduct.godownRackNo=req.body.godownRackNo;
   selectedProduct.godownShelfNo=req.body.godownShelfNo;
   selectedProduct.godownBoxNo=req.body.godownBoxNo;
   selectedProduct.agencyPurchaser=req.body.agencyPurchaser;
   selectedProduct.caseContains=req.body.caseContains;
   selectedProduct.miniumOrderQuantity=req.body.miniumOrderQuantity;

            
           await  productrepo.save(selectedProduct)

            res.send({status:200,message:"Updated Successfully"})
                 
        }catch (err) {
            res.send({status:400,error:err.message});
        }
        
    }

    async getAllBulkProducts(req,res,next){

        getRepository(Product).find({where:{preparationStatus:"Bulk "}}).then(list=>{

            return res.status(200).json({message:"Success",data:list});

        }).catch(err=>{
            return res.status(400).json({message:"Error",error:err})
        })
    }
    async getAllRepackageProducts(req,res,next){

        getRepository(Product).find({where:{preparationStatus:"Repackage"}}).then(list=>{

            return res.status(200).json({message:"Success",data:list});

        }).catch(err=>{
            return res.status(400).json({message:"Error",error:err})
        })
    }
    async searchProducts(req,res,next){

        getRepository(Product).findAndCount({productName:Like(`%${req.params.productName}%`)}).then(list=>{

            return res.status(200).json({message:"Success",data:list[0],count:list[1]});

        }).catch(err=>{
            return res.status(400).json({message:"Error",error:err})
        })
    }
    

    getRepackageByBulkProduct(req,res,next){

        getRepository(Product).find({where:{preparationStatus:"Repackage",bulkProduct:req.params.productId}}).then(list=>{

            return res.status(200).json({message:"Success",data:list});

        }).catch(err=>{
            return res.status(400).json({message:"Error",error:err})
        })
    }

    async filterProducts(req,res,next){
        let condtion:any = {};

        if(req.body.category!=null&&req.body.category!=""&&req.body.category!=undefined)
        condtion.category=req.body.category;

        if(req.body.subCategory!=null&&req.body.subCategory!=""&&req.body.subCategory!=undefined)
        condtion.subCategory=req.body.subCategory;

        if(req.body.type!=null&&req.body.type!=""&&req.body.type!=undefined)
        condtion.type=req.body.type;

        if(req.body.subType!=null&&req.body.subType!=""&&req.body.subType!=undefined)
        condtion.subType=req.body.subType;

        if(req.body.kind!=null&&req.body.kind!=""&&req.body.kind!=undefined)
        condtion.kind=req.body.kind;

        if(req.body.subKind!=null&&req.body.subKind!=""&&req.body.subKind!=undefined)
        condtion.subKind=req.body.subKind;

        if(req.body.manufacturer!=null&&req.body.manufacturer!=""&&req.body.manufacturer!=undefined)
        condtion.manufacturer=req.body.manufacturer;

        if(req.body.brand!=null&&req.body.brand!=""&&req.body.brand!=undefined)
        condtion.brand=req.body.brand;

        console.log("condtion",condtion)

        getRepository(Product).find({where:condtion}).then(list=>{

            return res.status(200).json({message:"Success",data:list});

        }).catch(err=>{
            return res.status(400).json({message:"Error",error:err})
        })
    }

}


