import {Request, Response} from "express";
import {Controller} from "../controller/Controller";
import {CategoryController} from "../controller/category.controller";
import {SubCategoryController} from "../controller/subCategory.controller";
import {ProductTypeController} from "../controller/productType.controller";
import {ProductSubTypeController} from "../controller/productSubType.controller";
import * as express from "express";
class Routes {    
     
    private controller: Controller;
    private categorycontroller: CategoryController;
    private subcategorycontroller: SubCategoryController;
    private productTypeController: ProductTypeController;
    public router=express.Router;
       constructor() {
        this.controller = new Controller();
        this.categorycontroller = new CategoryController();
        this.subcategorycontroller = new SubCategoryController();
        this.productTypeController = new ProductTypeController();
      
    } 
   
    public routes(app): void {
       
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });// following code is to handle http://localhost:3000/superHero request.
        app.route('/superHero')
            .get(this.controller.getAllSuperHero)
            .post(this.controller.addSuperHero);
    // following code is to handle http://localhost:3000/superHero/{superHeroId} request.
        app.route('/superHero/:superHeroId')
            .get(this.controller.getSuperHeroById)
            // .put(this.controller.updateSuperHero)
            // .delete(this.controller.deleteSuperHero);  
        app.route('/catageory').get(this.categorycontroller.getCategory)
        app.route('/createCatageory').post(this.categorycontroller.CreateCategory)
       
       
        app.route('/subcategory').get(this.subcategorycontroller.getSubCategory)
        app.route('/createSubcategory').post(this.subcategorycontroller.createSubCategory)
          
        app.route('/getProductType').get(this.productTypeController.getProductType)
        app.route('/CreateProductType').post(this.productTypeController.CreateProductType)
          
          }

          
}

export {Routes};
// export = (() => {
//     let catageor=new CategoryController()
//     let router = express.Router();
          
//     router.get('/admin', catageor.getCategory);
    
//     return router;
// })();