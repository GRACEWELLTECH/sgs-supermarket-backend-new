import {CategoryController} from "../Controller/category.controller";

import { Router } from 'express';

let controller=new CategoryController()
const catageoryRouter = Router();

catageoryRouter.get('/getCatageory',controller.getCategory);

export default catageoryRouter;