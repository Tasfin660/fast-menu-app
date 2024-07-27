import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { menuRouter } from './routes/menuRoutes.js';
import { mealRouter } from './routes/mealRoutes.js';
import { userRouter } from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MongoUrl)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch((e) => console.log('Connection failed. ' + e));

app.use('/api/v1/menu', menuRouter);
app.use('/api/v1/meal', mealRouter);
app.use('/api/v1/auth', userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
