import express from 'express';
import {
  getMeals,
  addMeal,
  deleteMeal,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/meals', getMeals);
router.patch('/meal/post/:userId', addMeal);
router.patch('/meal/delete/:userId', deleteMeal);

export { router as userRouter };
