import { Router } from 'express';
import prisma from '../prisma';

const router = Router();

// GET all users
router.get('/', async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// POST create user
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email }
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: 'Could not create user', details: err });
  }
});

export default router;
