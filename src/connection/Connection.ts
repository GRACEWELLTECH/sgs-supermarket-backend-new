import {createConnection} from "typeorm";

import SuperHero from "../entity/SuperHero";
import Power from "../entity/Power";
import Category from "../entity/Category";
import SubCategory from "../entity/SubCategory";
import ProductType from "../entity/ProductType";
import ProductSubType from "../entity/ProductSubType";


export const connection = createConnection({
     type: "mysql",
    host: "localhost",
    port: 3306,
    username: "abinesh",
    password: "Passw0rd",
    database: "mydb",
    entities: [
        Category,
        SuperHero,
        Power,
        SubCategory,
        ProductType,
        ProductSubType   
    ],
    synchronize: true,
    logging: false
});