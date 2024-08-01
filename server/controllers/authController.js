import UserModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const protect = (req, res, next) => {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token)
    return res
      .status(401)
      .json({ status: 'failed', message: 'No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res
        .status(401)
        .json({ status: 'failed', message: 'Invalid token.' });
    req.userId = decoded.userId;
    next();
  });
};

const register = async (req, res) => {
  try {
    const { username, image, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (user)
      return res.status(409).json({
        status: 'failed',
        message:
          'The user already exists. Please try again with a different username.',
      });

    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      image,
      role: 'User',
      meals: [],
      joined: date,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      status: 'success',
      message: 'User registration completed. Please log in to proceed.',
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message:
        'An error occurred while registering the user. Please try again later.',
      err: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user)
      return res.status(404).json({
        status: 'failed',
        message:
          'The user does not exist. Please check your username or register first before logging in.',
      });

    const isPassValid = await bcrypt.compare(password, user.password);

    if (!isPassValid)
      return res.status(401).json({
        status: 'failed',
        message:
          'Incorrect password. Please check your password and try again.',
      });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    const { password: userPassword, ...data } = user._doc;
    res
      .status(200)
      .json({ status: 'success', message: 'Login successful.', data, token });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'An error occurred while logging in. Please try again later.',
      err: error.message,
    });
  }
};

export { protect, register, login };
