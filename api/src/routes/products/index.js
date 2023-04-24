const { Router } = require('express');
const ProductsController = require('../../controllers/products');
const router = Router();
const controller = new ProductsController();

//* Obtener todos los productos.
router.get('/', controller.findAll);

//* Obtener producto por id.
router.get('/:id', controller.findOne);

//* Crear un producto.
router.post('/', controller.create);

//* Editar un producto.
router.patch('/', controller.update);

//* Borrar un producto.
router.delete('/:id', controller.delete);

module.exports = router;
