const { Router } = require('express');
const ChampionsController = require('../../controllers/champions');
const router = Router();
const controller = new ChampionsController();

//* Obtener todos los campeones.
router.get('/', controller.findAll);

//* Obtener campeón por name.
router.get('/:name', controller.findOne);

//* Crear un campeón.
router.post('/', controller.create);

//* Editar un campeón.
router.patch('/:name', controller.update);

//* Borrar un campeón.
router.delete('/:name', controller.delete);

module.exports = router;
