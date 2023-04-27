const { Router } = require('express');
const ChampionsController = require('../../controllers/champions');
const router = Router();
const controller = new ChampionsController();

//* Obtener todos los campeones.
router.get('/', controller.findAll);

//* Crear un campeón.
router.post('/', controller.create);

module.exports = router;
