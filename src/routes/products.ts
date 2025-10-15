import { Router } from 'express';
import prisma from '../prisma';

const router = Router();

// GET /products → list all
router.get('/', async (_req, res) => {
  try {
    const productos = await prisma.producto.findMany();
    res.json(productos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// POST /products → create one
router.post('/', async (req, res) => {
  const { titulo, precio, descripcion, imagen } = req.body;
  try {
    const nuevoProducto = await prisma.producto.create({
      data: { titulo, precio, descripcion, imagen },
    });
    res.status(201).json(nuevoProducto);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error creating product', details: err });
  }
});

export default router;
