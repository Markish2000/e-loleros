const { Router } = require('express');
const LoginController = require('../../controllers/login');
const router = Router();
const controller = new LoginController();

//* Obtener todos los campeones.
// router.get('/', controller.validateToken);

module.exports = router;
