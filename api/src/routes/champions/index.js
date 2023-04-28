const { Router } = require('express');
const ChampionsController = require('../../controllers/champions');
const router = Router();
const controller = new ChampionsController();

//* Obtener todos los campeones.
router.get('/', controller.findAll);

//* Obtener producto por name.
router.get('/:name', controller.findOne);

//* Crear un campeón.
router.post('/', controller.create);

//* Editar un producto.
router.patch('/:name', controller.update);

//* Borrar un producto.
router.delete('/:name', controller.delete);

module.exports = router;
