import bcrypt from 'bcrypt';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';

const register = async (req, res) => {
  try {
    const { username, image, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (user) {
      throw new Error('Action Failed!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
    const newUser = new UserModel({
      username,
      image,
      role: 'user',
      meal_list: [],
      joined: date,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).end();
  } catch (err) {
    if (err.message === 'Action Failed!')
      res.status(409).json({
        name: 'Action Failed!',
        message:
          'The user already exists. Please try again with a different username.',
      });
    else
      res.status(500).json({
        name: 'Server Error!',
        message:
          'An error occurred while registering the user. Please try again later.',
      });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (!user) {
      throw new Error('not-exist');
    }

    const isPassValid = await bcrypt.compare(password, user.password);

    if (!isPassValid) {
      throw new Error('wrong-info');
    }

    const token = jwt.sign({ id: user['_id'] }, process.env.JWTTOKEN);
    const userInfo = {
      username: user.username,
      image: user.image,
      role: user.role,
      meal_list: user.meal_list,
      joined: user.joined,
    };
    res.json({ token, userInfo });
  } catch (err) {
    if (err.message === 'not-exist')
      res.status(409).json({
        name: 'Action Failed!',
        message:
          'The user does not exist. Please check your username or register first before logging in.',
      });
    else if (err.message === 'wrong-info')
      res.status(401).json({
        name: 'Action Failed!',
        message:
          'Incorrect password. Please check your password and try again.',
      });
    else
      res.status(500).json({
        name: 'Server Error!',
        message:
          'An error occurred while registering the user. Please try again later.',
      });
  }
};

export { login, register };
