import MealModel from '../models/mealModel.js';

const postMeal = async (req, res) => {
  try {
    const newMeal = await new MealModel({ ...req.body, likes: 1 });
    const meal = await newMeal.save();
    res.status(200).json(meal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteMeal = async (req, res) => {
  try {
    const { mealId } = req.params;
    await MealModel.deleteOne({ _id: mealId });
    res.status(200).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { postMeal, deleteMeal };
