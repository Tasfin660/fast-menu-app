import MenuModel from '../models/mealModel.js';

const getMenu = async (req, res) => {
  const { menuId } = req.params;
  try {
    const menu = await MenuModel.find({ category: menuId });
    res.status(200).json(menu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getMenu };
