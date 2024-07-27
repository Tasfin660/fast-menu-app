import express from 'express';
import { getMenu } from '../controllers/menuController.js';

const router = express.Router();

router.get('/:menuId', getMenu);

export { router as menuRouter };
