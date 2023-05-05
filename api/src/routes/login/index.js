const { Router } = require('express');
const LoginController = require('../../controllers/login');
const router = Router();
const controller = new LoginController();

//* Iniciar sesión localmente.
router.post('/', controller.login);

//* Iniciar sesión con Google.
router.get('/google', controller.google);

module.exports = router;
