import { Router } from 'express'

import {itemVsEanController} from '../Controller/Inventory/itemVsEanController'

const itemVsEan=new itemVsEanController()

const inventoryRouter = Router();

inventoryRouter.post('/assignItemVsEan',itemVsEan.createEan)


export default inventoryRouter;