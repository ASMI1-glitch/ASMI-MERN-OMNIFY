import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);

// 🟢 PORT handling for Render
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
