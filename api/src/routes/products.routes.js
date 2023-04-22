const { Router } = require('express');
const ProductsService = require('../services/products.service');
const router = Router();
const service = new ProductsService();

//* Obtener todos los productos.
router.get('/', async (req, res) => {
  try {
    const response = await service.find();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

//* Obtener producto por id.
router.get('/:id', async (req, res) => {
  try {
    const response = await service.findOne();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

//* Crear un producto.
router.post('/', async (req, res) => {
  try {
    const body = req.body;

    const createNewProduct = await service.create(body);

    res.json(createNewProduct);
  } catch (error) {
    next(error);
  }
});

//* Editar un producto.
router.patch('/', async (req, res) => {
  try {
    const response = await service.update();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

//* Borrar un producto.
router.delete('/', async (req, res) => {
  try {
    const response = await service.delete();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
