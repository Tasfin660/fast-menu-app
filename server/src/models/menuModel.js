import mongoose from 'mongoose';

const MenuSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
});

const MenuModel = new mongoose.model('all-menu', MenuSchema, 'all-menu');

export default MenuModel;
