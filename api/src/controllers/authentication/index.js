const AuthenticationService = require('../../services/authentication');
const service = new AuthenticationService();

class AuthenticationController {
  constructor() {}

  //* Obtener todos los productos.
  async validateToken(req, res, next) {
    try {
      const { nickName } = req.body;
      const user = await service.findOne(nickName);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthenticationController;
