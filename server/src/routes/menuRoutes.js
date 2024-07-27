import express from 'express';
import { getMenus } from '../controllers/menuController.js';

const router = express.Router();

router.get('/:menuId', getMenus);

export { router as menuRouter };
