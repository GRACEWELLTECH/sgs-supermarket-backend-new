import {createConnection} from "typeorm";

import Category from "../entity/Category";
import SubCategory from "../entity/SubCategory";
import ProductType from "../entity/ProductType";
import ProductSubType from "../entity/ProductSubType";
import Kind from "../entity/Kind";
import SubKind from "../entity/SubKind";
import Manufacturer from "../entity/Manufacturer";
import ManufacyturerVsBrand from "../entity/ManufacturerVsBrand";
import Brand from "../entity/Brand";
import {Product} from "../entity/Product";
import {Gst} from "../entity/Gst";
import {ItemVsEan} from "../entity/Inventory/ItemVsEan";
import {HsnVsGst} from "../entity/Inventory/HsnVsGst";
import {Distributor} from "../entity/Purchase/Distributer/DistributorMaster";
import {DistributerDeliveryPersion} from "../entity/Purchase/Distributer/DistributerDeliveryPerson";
import {DistributerLandline} from "../entity/Purchase/Distributer/DistributerLandline";
import {DistributerMail} from "../entity/Purchase/Distributer/DistributerMail";
import {WeightUnit} from "../entity/WeightUnit"
import {OrderVsDelivery} from "../entity/Purchase/Distributer/OrderVsDelivery";
import {Assemblykit} from "../entity/Inventory/assemblykit_create";
import {GiftVoucher} from "../entity/Inventory/GiftVoucher_create";
import {GiftvoucherClaim} from "../entity/Inventory/GiftVoucher_claim"
import {GiftvoucherIssue} from "../entity/Inventory/GiftVoucher_issue"
import {prepareAssemblyKit} from "../entity/Inventory/assemblykit_prepare";
import {CategoryVsBrand} from "../entity/Purchase/CategoryVsBrand";
import {CategoryVsManufacturer} from "../entity/Purchase/CategoryVsManufacturer";
import {RepackEntry} from "../entity/Inventory/RepackEntry";
import {Repack} from "../entity/Inventory/Repack";
import {RepackStock} from "../entity/Inventory/repackStock";
import {RepackTransfer} from "../entity/Inventory/RePackTransfer";
import {RepackTransferDetail} from "../entity/Inventory/RepackTransferDetails";
import {RepackWastage} from "../entity/Inventory/RepackWastage";
import {RepackWastageDetail} from "../entity/Inventory/RepackWastageDetail";

import {RepackWeightloss} from '../entity/Inventory/RepackWeightLoss';
import {RepackweightLossDetail} from '../entity/Inventory/RepackWeightLossDetails';
import {RepackReuse} from '../entity/Inventory/RepackReuse'
import {RepackReuseDetail} from '../entity/Inventory/RepackReuseDetail';
import OpeningStock from '../entity/Inventory/OpeningStock'
import {Stock} from '../entity/Inventory/stock'
import ReorderMaxMin from '../entity/Inventory/ReorderMaxMin'
import {DistributerVsManufacturer} from '../entity/Purchase/DistributerVsManufacturer'
//import {T}}
// import {DistributerSalesPersion} from "../entity/Purchase/Distributer/DistributerSalespersion";
import {TransporterMaster} from "../entity/Purchase/TransporterMaster";

import {Wastage}  from '../entity/Inventory/wastage'
export const connection = createConnection({
     type: "mysql",
    host: "localhost",
    port: 3306,
    username: "abinesh",
    password: "Passw0rd",
    database: "sgs_db",
    entities: [
        Category,SubCategory,
        ProductType,ProductSubType,
        Kind,SubKind,
        WeightUnit,
        Manufacturer,Brand,
        Product,Gst,
        ManufacyturerVsBrand,
        //inventoary
        ItemVsEan,
        HsnVsGst,
        Assemblykit,
        GiftvoucherClaim,
        GiftvoucherIssue,
        GiftVoucher,
        prepareAssemblyKit,
        Wastage,OpeningStock,Stock,ReorderMaxMin,
            //inventoary-repack
        RepackEntry,Repack,RepackStock,
        RepackTransfer,RepackTransferDetail,RepackWastage,RepackWastageDetail,
        RepackWeightloss,RepackweightLossDetail,RepackReuse,RepackReuseDetail,
        //purchease 
        Distributor,
        DistributerDeliveryPersion,
        DistributerLandline,
        DistributerMail,
        CategoryVsBrand,TransporterMaster,
        DistributerVsManufacturer,
        // DistributerSalesPersion,
        OrderVsDelivery, CategoryVsManufacturer
    ],
    synchronize: true,
    logging: false
});