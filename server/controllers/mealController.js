import MealModel from '../models/mealModel.js';
import UserModel from '../models/userModel.js';

const getMeals = async (req, res) => {
  try {
    const { category } = req.params;
    const meals = await MealModel.find({ category });

    res.status(200).json({
      status: 'success',
      message: 'Meals retrieved successfully',
      data: meals,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'An error occurred while getting the meal.',
      err: error.message,
    });
  }
};

const createMeal = async (req, res) => {
  try {
    const newMeal = new MealModel({
      ...req.body,
      likes: [req.userId],
    });
    await newMeal.save();
    res.status(201).json({
      status: 'success',
      message: `${req.body.name} meal created.`,
      data: newMeal,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'An error occurred while creating the meal.',
      err: error.message,
    });
  }
};

const likeMeal = async (req, res) => {
  try {
    const { modifiedCount } = await MealModel.updateOne(
      {
        _id: req.body.mealId,
      },
      {
        $addToSet: { likes: req.userId },
      },
      { returnDocument: 'after' }
    );

    if (modifiedCount === 0)
      return res.status(404).json({
        status: 'failed',
        message: 'The user has already liked the meal.',
      });

    res.status(200).json({
      status: 'success',
      message: 'Successfully liked the meal.',
    });
    res.end();
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'An error occurred while liking the meal.',
      err: error.message,
    });
  }
};

const deleteMeal = async (req, res) => {
  try {
    const { mealId } = req.params;
    const { deletedCount } = await MealModel.deleteOne({ _id: mealId });

    if (deletedCount === 0)
      return res
        .status(404)
        .json({ status: 'failed', message: 'Meal not found' });

    await UserModel.updateMany({ meals: mealId }, { $pull: { meals: mealId } });
    res
      .status(200)
      .json({ status: 'success', message: 'Successfully deleted meal.' });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'An error occurred while deleting the meal.',
      err: error.message,
    });
  }
};

export { createMeal, deleteMeal, getMeals, likeMeal };
