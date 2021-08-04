// import "reflect-metadata";
// import {createConnection} from "typeorm";
// import {User} from "./entity/User";

// import * as app from './app';

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.info('Express server listening on http://localhost:3000');
//   });

import * as express from 'express'
import {Routes} from './routes/Routes';
import bodyParser = require("body-parser");

import routes from './routes';
class App {public app: express.Application;
    
    // public routePrv: Routes;
    
    constructor() {// initializing express in this application
        this.app = express();// support application/json type post data
        this.app.use(bodyParser.json());//support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));// for routing the http request to controller


        
        this.app.use(function (req, res, next) {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
                res.header('Access-Control-Allow-Headers',
                    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
                next();
        });
       
        this.app.use('/api',routes)
        // this.routePrv = new Routes();
        // this.routePrv.routes(this.app);

        this.app.listen(3001, () => {
            console.log('Server started');
          });
    }
    }
    
    export default new App().app;



// const app = express();

// app.use(function (req, res, next) {
//                     res.header('Access-Control-Allow-Origin', '*');
//                     res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
//                     res.header('Access-Control-Allow-Headers',
//                         'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//                     next();
// });
// app.use(bodyParser.json());
// app.use(express.json());
// app.use('/api',routes);
// app.listen(3000, () => {
//   console.log('Server started in index');
// });