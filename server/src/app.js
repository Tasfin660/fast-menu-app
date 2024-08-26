import express from 'express';
import connectDB, { dbConnected } from '../config/db.js';
import menuRouter from './routes/menuRoutes.js';
import userRouter from './routes/userRoutes.js';
import vite from '../config/vite.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(async (req, res, next) => {
  if (dbConnected || !req.path.toLowerCase().startsWith('/api')) return next();
  if (!dbConnected) await connectDB();
  if (!dbConnected)
    return res.status(500).send({
      success: 'fail',
      message: 'There was an error connecting to MongoDB',
    });
  else return next();
});

app.use('/api/v1/menu', menuRouter);
app.use('/api/v1/users', userRouter);

await vite(express, app);

export default app;
