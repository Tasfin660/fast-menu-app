import express from 'express';
import {
  getMenu,
  postMeal,
  deleteMeal,
} from '../controllers/menuController.js';

const router = express.Router();

router.get('/:menuId', getMenu);
router.post('/add-meal', postMeal);
router.delete('/delete/:_id', deleteMeal);

export { router as menuRouter };
