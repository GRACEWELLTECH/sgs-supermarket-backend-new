import {createConnection} from "typeorm";

import SuperHero from "../entity/SuperHero";
import Power from "../entity/Power";
import Category from "../entity/Category";
import SubCategory from "../entity/SubCategory";
import ProductType from "../entity/ProductType";
import ProductSubType from "../entity/ProductSubType";
import Kind from "../entity/Kind";
import SubKind from "../entity/SubKind";
import weightUnit from "../entity/weightUnit";


export const connection = createConnection({
     type: "mysql",
    host: "localhost",
    port: 3306,
    username: "abinesh",
    password: "Passw0rd",
    database: "mydb",
    entities: [
        Category,SubCategory,
        SuperHero,Power,
        ProductType,ProductSubType,
        Kind,SubKind,
        weightUnit  
    ],
    synchronize: true,
    logging: false
});