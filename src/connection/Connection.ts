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
import {Gst} from "../entity/Gst";
import {ItemVsEan} from "../entity/Inventory/ItemVsEan";
import {HsnVsGst} from "../entity/Inventory/HsnVsGst";

import {WeightUnit} from "../entity/WeightUnit"

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
        Manufacturer,
        Brand,
        Product,Gst,

        //inventoary
        ItemVsEan,
        HsnVsGst
    ],
    synchronize: true,
    logging: false
});