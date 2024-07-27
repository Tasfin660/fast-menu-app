import MenuModel from '../models/menuModel.js';

const getMenus = async (req, res) => {
  const { menuId } = req.params;
  try {
    const menus = await MenuModel.find({ category: menuId });
    res.status(200).json(menus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getMenus };
