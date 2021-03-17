import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {getRepository} from "typeorm";

import Product from "../entity/Product"

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
    async createProduct(req, res,next) {
     
        let product = req.body
        let newproduct=new Product();
            newproduct.productName=product.productName;
            newproduct.shortName=product.shortName;
            newproduct.weight=product.weight;
            newproduct.weightUnit=product.weightUnit;
            newproduct.category=product.category;
            newproduct.subCategory=product.subCategory;
            newproduct.type=product.type;
            newproduct.subType=product.subType;
            newproduct.kind=product.kind;
            newproduct.subKind=product.subKind;
            newproduct.manufacturer=product.manufacturer;
            newproduct.brand=product.brand;
            newproduct.distributerType=product.distributerType;
            newproduct.agency=product.agency;
            newproduct.purcheaser=product.purcheaser;
            newproduct.active=product.active;
            newproduct.GST=product.GST;
            newproduct.hsnNumber=product.hsnNumber;
            newproduct.preparationStatus=product.preparationStatus;
            newproduct.bulkProduct=product.bulkProduct?product.bulkProduct:"";
            newproduct.rePackageWeight=product.rePackageWeight?product.rePackageWeight:0;
            newproduct.allowDecimal=product.allowDecimal;
            newproduct.numberOfDecimalPoints=product.numberOfDecimalPoints;
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
            newproduct.color=product.color;
            newproduct.onlineType=product.onlineType;
            newproduct.allowExchange=product.allowExchange;
            newproduct.warrenty=product.warrenty;
            newproduct.warrentyUnit=product.warrentyUnit;
            newproduct.masterGodownStackMin=product.masterGodownStackMin;
            newproduct.masterGodownStackMax=product.masterGodownStackMax;
            newproduct.storeStackMin=product.storeStackMin;
            newproduct.storeStackMax=product.storeStackMax;
            newproduct.rackStackMin=product.rackStackMin;
            newproduct.rackStackMax=product.rackStackMax;
      
     
        connection.then(async connection => {
                    console.log(req.body)
                   
                    await connection.manager.save(newproduct);
                res.json({message: "Successfully Saved."})
                })
                .catch(error => {
                    console.error("Error ", error);
                    res.json(error);
                }); 
      
    }
}


