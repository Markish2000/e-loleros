const { Router } = require('express');
const router = Router();
const usersController = require('../../controllers/users');
const controller = new usersController();

//* Obtener todos los usuarios.
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

//* Obtener usuario por nickName.
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
router.get('/:nickName', controller.findOne);

//* Crear un usuario.
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

//* Editar un usuario.
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
router.patch('/:nickName', controller.update);

//* Borrar un usuario.
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
router.delete('/:nickName', controller.delete);

module.exports = router;
