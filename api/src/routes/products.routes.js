const { Router } = require('express');
const ProductsService = require('../services/products.service');
const router = Router();
const service = new ProductsService();

//* Obtener todos los productos.
router.get('/', async (req, res, next) => {
  try {
    const response = await service.findAll();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

//* Obtener producto por id.
router.get('/:id', async (req, res, next) => {
  try {
    const response = await service.findOne();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

//* Crear un producto.
router.post('/', async (req, res, next) => {
  try {
    const body = req.body;

    const createNewProduct = await service.create(body);

    res.status(200).json(createNewProduct);
  } catch (error) {
    next(error);
  }
});

//* Editar un producto.
router.patch('/', async (req, res, next) => {
  try {
    const response = await service.update();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

//* Borrar un producto.
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteProduct = await service.delete(id);

    res.status(200).json(deleteProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
