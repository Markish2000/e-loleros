const { Router } = require('express');
const AuthenticationController = require('../../controllers/authentication');
const router = Router();
const controller = new AuthenticationController();

//* Obtener todos los campeones.
router.post('/', controller.validateToken);

module.exports = router;
