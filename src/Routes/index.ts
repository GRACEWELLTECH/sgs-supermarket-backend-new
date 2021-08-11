import { Router } from 'express';
import usersRouter from './user.routes';
import catageoryRouter from './category.router';
import productRouter from './product.router';
import inventoryRouter from './inventary.router';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/category', catageoryRouter);
routes.use('/Product', productRouter);
routes.use('/inventory', inventoryRouter);

export default routes;