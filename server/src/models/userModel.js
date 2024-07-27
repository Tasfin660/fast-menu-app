import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  meal_list: {
    type: Array,
  },
  joined: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const UserModel = new mongoose.model('users', UserSchema);

export default UserModel;
