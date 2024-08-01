import express from 'express';
import { register, login, protect } from '../controllers/authController.js';
import {
  getMeals,
  addMeal,
  removeMeal,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.use(protect);

router.get('/meals', getMeals);
router.put('/meals', addMeal);
router.delete('/meals/:mealId', removeMeal);

router.delete('/', deleteUser);

export default router;
