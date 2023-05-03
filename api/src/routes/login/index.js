const { Router } = require('express');
const LoginController = require('../../controllers/login');
const router = Router();
const controller = new LoginController();

//* Iniciar sesión localmente.
router.post('/', controller.login);

module.exports = router;
