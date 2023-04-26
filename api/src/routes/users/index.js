const { Router } = require('express');
const usersController = require('../../controllers/users');
const router = Router();
const controller = new usersController();

//* Obtener todos los productos.
/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     tags:
 *       - users
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
 *                     $ref: "#/components/schemas/users"
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
 * /api/v1/users/:id:
 *   get:
 *     tags:
 *       - users
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
 *                     $ref: "#/components/schemas/users"
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
router.get('/:id', controller.findOne);

//* Crear un producto.
/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     tags:
 *       - users
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
 *                     $ref: "#/components/schemas/users"
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
 *                       example: "notNull Violation: users.price cannot be null"
 *
 */
router.post('/', controller.create);

//* Editar un producto.
/**
 * @openapi
 * /api/v1/users/:id:
 *   patch:
 *     tags:
 *       - users
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
 *                     $ref: "#/components/schemas/users"
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
router.patch('/:id', controller.update);

//* Borrar un producto.
/**
 * @openapi
 * /api/v1/users/:id:
 *   delete:
 *     tags:
 *       - users
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
router.delete('/:id', controller.delete);

module.exports = router;
