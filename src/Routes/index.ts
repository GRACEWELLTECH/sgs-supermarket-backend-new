import { Router } from 'express';
import usersRouter from './user.routes';
import catageoryRouter from './category.router';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/category', catageoryRouter);

export default routes;