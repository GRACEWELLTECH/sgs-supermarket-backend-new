import { Router } from 'express';
import usersRouter from './user.routes';
import catageoryRouter from './category.router';
import productRouter from './product.router';
import inventoryRouter from './inventary.router';
import purcheaseRouter from './purchease.router';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/category', catageoryRouter);
routes.use('/Product', productRouter);
routes.use('/inventory', inventoryRouter);
routes.use('/purchease', purcheaseRouter);

export default routes;