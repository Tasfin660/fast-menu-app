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
  meals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'all-meals',
      required: true,
    },
  ],
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
