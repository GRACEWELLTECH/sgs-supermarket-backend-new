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
    username: "gracewell",
    password: "12345",
    database: "sgs_market",
    entities: [
        Category,SubCategory,
        SuperHero,Power,
        ProductType,ProductSubType,
        Kind,SubKind,
        WeightUnit,
        Manufacturer,
        Brand,
        Product,

        assemblykit,changeselling, DistributorMaster
    ],
    synchronize: true,
    logging: false
});