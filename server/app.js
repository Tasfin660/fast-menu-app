import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import menuRouter from './routes/menuRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch((e) => console.log('Connection failed. ' + e));

app.use('/api/v1/menu', menuRouter);
app.use('/api/v1/users', userRouter);

export default app;
