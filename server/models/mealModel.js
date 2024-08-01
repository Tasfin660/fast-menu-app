import mongoose from 'mongoose';

const MealSchema = mongoose.Schema({
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
  category: {
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
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  ],
});

const MealModel = new mongoose.model('all-meals', MealSchema);

export default MealModel;
