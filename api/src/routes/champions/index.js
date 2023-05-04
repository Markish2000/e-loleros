const { Router } = require('express');
const ChampionsController = require('../../controllers/champions');
const router = Router();
const controller = new ChampionsController();
const schemaValidation = require('../../middlewares/schemaValidation');
const validateToken = require('../../middlewares/validateToken');
const {
  createChampionSchema,
  updateChampionSchema,
  getOneChampionSchema,
  deleteChampionSchema,
} = require('../../schemas/champions');

//* Obtener todos los campeones.
router.get('/', controller.findAll);

//* Obtener campeón por name.
router.get(
  '/:name',
  schemaValidation(getOneChampionSchema, 'params'),
  controller.findOne
);

//* Crear un campeón.
router.post(
  '/',
  schemaValidation(createChampionSchema, 'body'),
  validateToken,
  controller.create
);

//* Editar un campeón por name.
router.patch(
  '/:name',
  schemaValidation(updateChampionSchema, 'body'),
  validateToken,
  controller.update
);

//* Borrar un campeón por name.
router.delete(
  '/:name',
  schemaValidation(deleteChampionSchema, 'params'),
  validateToken,
  controller.delete
);

module.exports = router;
