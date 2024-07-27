import MenuModel from '../models/mealModel.js';

const postMeal = async (req, res) => {
  try {
    const newMeal = await new MenuModel({ ...req.body, likes: 1 });
    const meal = await newMeal.save();
    res.status(200).json(meal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteMeal = async (req, res) => {
  try {
    const { _id } = req.params;
    await MenuModel.deleteOne({ _id });
    res.status(200).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { postMeal, deleteMeal };
