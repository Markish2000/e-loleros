const { Router } = require('express');
const ChampionsController = require('../../controllers/champions');
const router = Router();
const controller = new ChampionsController();
const validateToken = require('../../middlewares/validateToken');

//* Obtener todos los campeones.
router.get('/', controller.findAll);

//* Obtener campeón por name.
router.get('/:name', validateToken, controller.findOne);

//* Crear un campeón.
router.post('/', validateToken, controller.create);

//* Editar un campeón.
router.patch('/:name', validateToken, controller.update);

//* Borrar un campeón.
router.delete('/:name', validateToken, controller.delete);

module.exports = router;
