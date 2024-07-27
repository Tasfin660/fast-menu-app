import userModel from '../models/userModel.js';

const getMeals = async (req, res) => {};

const addMeal = async (req, res) => {
  try {
    const { userId } = req.params;
    const { mealId } = req.body;
    await userModel.findByIdAndUpdate(
      userId,
      { $push: { meal_list: mealId } },
      { new: true }
    );

    res.status(200).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteMeal = async (req, res) => {
  const { mealId } = req.params;
  console.log(mealId);
  res.status(200).end();
};

export { getMeals, addMeal, deleteMeal };
