const { Router } = require('express');
const ProductsController = require('../../controllers/products');
const router = Router();
const controller = new ProductsController();

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     tags:
 *       - products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/products"
 *
 */
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
