import express from 'express';
import { deleteMeal, postMeal } from '../controllers/mealController.js';

const router = express.Router();

router.post('/post', postMeal);
router.delete('/delete/:mealId', deleteMeal);

export { router as mealRouter };
