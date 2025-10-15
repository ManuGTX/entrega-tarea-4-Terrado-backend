import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users';
import productRoutes from './routes/products';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

app.use('/products', productRoutes);

app.get('/', (_req, res) => {
  res.send('🚀 Express + TypeScript + Prisma + SQLite');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
