const { Router } = require('express');
const ProductsController = require('../../controllers/products');
const router = Router();
const controller = new ProductsController();
const validateToken = require('../../middlewares/validateToken');
const schemaValidation = require('../../middlewares/schemaValidation');
const {
  getOneProductSchema,
  createProductSchema,
  updateProductSchema,
  buyProductSchema,
} = require('../../schemas/products');

//* Obtener todos los productos.
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
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/products"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "La base de datos está vacía."
 *
 */
router.get('/', controller.findAll);

//* Obtener producto por id.
/**
 * @openapi
 * /api/v1/products/:id:
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
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/products"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "El producto con el id 1 no se encuentra en nuestra base de datos."
 *
 */
router.get(
  '/:id',
  schemaValidation(getOneProductSchema, 'params'),
  controller.findOne
);

//* Crear un producto.
/**
 * @openapi
 * /api/v1/products:
 *   post:
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
 *                 message:
 *                   type: string
 *                   example: "Creado"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/products"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "notNull Violation: products.price cannot be null"
 *
 */
router.post(
  '/',
  schemaValidation(createProductSchema, 'body'),
  validateToken,
  controller.create
);

//* Editar un producto.
/**
 * @openapi
 * /api/v1/products/:id:
 *   patch:
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
 *                 message:
 *                   type: string
 *                   example: "El producto con el id 1 se ha actualizado con éxito."
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/products"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "El producto con el id 1 no existe en nuestra base de datos."
 *
 */
router.patch(
  '/:id',
  schemaValidation(updateProductSchema, 'body'),
  validateToken,
  controller.update
);

//* Borrar un producto.
/**
 * @openapi
 * /api/v1/products/:id:
 *   delete:
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
 *                 message:
 *                   type: string
 *                   example: "Borrado"
 *                 data:
 *                   type: string
 *                   example: "1"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "No existe el producto en nuestra base de datos."
 *
 */
router.delete('/:id', validateToken, controller.delete);

//* Comprar un producto con MercadoPago.
router.post('/buy', controller.buyOneProduct);

//* Compra exitosa.
router.get('/success', controller.buySuccess);

module.exports = router;
