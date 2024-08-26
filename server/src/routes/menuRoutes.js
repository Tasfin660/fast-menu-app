import express from 'express';
import {
  getMeals,
  createMeal,
  likeMeal,
  deleteMeal,
} from '../controllers/mealController.js';
import { protect } from '../controllers/authController.js';

const router = express.Router();

router.get('/meals/:category', getMeals);

router.use(protect);

router.post('/meals', createMeal);
router.put('/meals', likeMeal);
router.delete('/meals/:mealId', deleteMeal);

export default router;
