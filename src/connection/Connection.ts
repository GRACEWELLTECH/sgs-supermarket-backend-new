import {createConnection} from "typeorm";


import SuperHero from "../entity/SuperHero";
import Power from "../entity/Power";
import Category from "../entity/Category";
import SubCategory from "../entity/SubCategory";
import ProductType from "../entity/ProductType";
import ProductSubType from "../entity/ProductSubType";
import Kind from "../entity/Kind";
import SubKind from "../entity/SubKind";
import {Manufacturer} from "../entity/Manufacturer";
import {Brand} from "../entity/Brand";
import {Product} from "../entity/Product";
<<<<<<< Updated upstream
=======
import {Gst} from "../entity/Gst";
import {ItemVsEan} from "../entity/Inventory/ItemVsEan";
import {HsnVsGst} from "../entity/Inventory/HsnVsGst";
import {Distributor} from "../entity/Purchase/Distributer/DistributorMaster";
import {DistributerDeliveryPersion} from "../entity/Purchase/Distributer/DistributerDeliveryPerson";
import {DistributerLandline} from "../entity/Purchase/Distributer/DistributerLandline";
import {DistributerMail} from "../entity/Purchase/Distributer/DistributerMail";
import {WeightUnit} from "../entity/WeightUnit"
import {OrderVsDelivery} from "../entity/Purchase/Distributer/OrderVsDelivery";
import { TransporterMaster } from "../entity/Purchase/TransporterMaster"
// import {DistributerSalesPersion} from "../entity/Purchase/Distributer/DistributerSalespersion";
>>>>>>> Stashed changes


import {WeightUnit} from "../entity/WeightUnit";

/*Inventory Section 
import assemblykit_create from "../entity/Inventory/assemblykit_create";*/
import {assemblykit} from "../entity/Inventory/assemblykit_create"
import {changeselling} from "../entity/Inventory/changeselling"

/*Purchase Section */
import {DistributorMaster} from "../entity/Purchase/DistributorMaster"

export const connection = createConnection({
     type: "mysql",
    host: "localhost",
    port: 3306,
<<<<<<< Updated upstream
    username: "gracewell",
    password: "12345",
    database: "sgs_market",
=======
    //username: "abinesh",
    //password: "Passw0rd",
    // database: "sgs_db",
  
    username: "root",
    password: "12345",
   database: "sgs_market",
 
>>>>>>> Stashed changes
    entities: [
        Category,SubCategory,
        SuperHero,Power,
        ProductType,ProductSubType,
        Kind,SubKind,
        WeightUnit,
        Manufacturer,
        Brand,
<<<<<<< Updated upstream
        Product,

        assemblykit,changeselling, DistributorMaster
=======
        Product,Gst,
        ManufacyturerVsBrand,
        //inventoary
        ItemVsEan,
        HsnVsGst,

        //purchease 
        Distributor,
        DistributerDeliveryPersion,
        DistributerLandline,
        DistributerMail,
        TransporterMaster,

        // DistributerSalesPersion,
        OrderVsDelivery
>>>>>>> Stashed changes
    ],
    synchronize: true,
    logging: false
});