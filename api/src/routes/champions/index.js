const { Router } = require('express');
const ChampionsController = require('../../controllers/champions');
const router = Router();
const controller = new ChampionsController();

//* Obtener todos los champions.
router.get('/', controller.findAll);

//* Obtener champion por name.
router.get('/:name', controller.findOne);

//* Crear un champion.
router.post('/', controller.create);

//* Editar un champion.
router.patch('/:name', controller.update);

//* Borrar un champion.
router.delete('/:name', controller.delete);

module.exports = router;
