import MealModel from '../models/mealModel.js';
import UserModel from '../models/userModel.js';

const getMeals = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    const meals = await MealModel.find(
      { _id: { $in: user.meals } },
      { price: 0, tag: 0, people: 0, rate: 0, likes: 0 }
    );
    res.status(200).json({
      status: 'success',
      message: 'Meals retrieved successfully',
      data: meals,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'An error occurred while getting the meals from the user list.',
      err: error.message,
    });
  }
};

const addMeal = async (req, res) => {
  try {
    const { modifiedCount } = await UserModel.updateOne(
      { _id: req.userId },
      {
        $addToSet: { meals: req.body.mealId },
      }
    );

    if (modifiedCount === 0)
      return res
        .status(404)
        .json({ status: 'failed', message: 'Meal already added to the list.' });

    res.status(200).json({
      status: 'success',
      message: 'Meal added to the list.',
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'An error occurred while adding the meal to the list.',
      err: error.message,
    });
  }
};

const removeMeal = async (req, res) => {
  try {
    const { mealId } = req.params;
    const { modifiedCount } = await UserModel.updateOne(
      { _id: req.userId },
      { $pull: { meals: mealId } }
    );

    if (modifiedCount === 0)
      return res.status(404).json({
        status: 'failed',
        message: 'Meal already removed from the list.',
      });

    res.status(200).json({
      status: 'success',
      message: 'Successfully removed meal from the list.',
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'An error occurred while removing the meal from the list.',
      err: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { deletedCount } = await UserModel.findByIdAndDelete(req.userId);

    if (deletedCount === 0)
      return res
        .status(404)
        .json({ status: 'failed', message: 'User not found' });

    res
      .status(200)
      .json({ status: 'success', message: 'successfully deleted user.' });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'An error occurred while deleting the user.',
      err: error.message,
    });
  }
};

export { getMeals, addMeal, removeMeal, deleteUser };
