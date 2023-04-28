const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const LoginService = require('../../services/login');
const service = new LoginService();

class LoginController {
  constructor() {}

  //* Obtener todos los productos.
  async findAll(req, res, next) {
    try {
      const { nickName, password } = req.body;
      const user = await service.findOne(nickName);
      const passwordCorrect =
        user === null
          ? false
          : await bcrypt.compare(password, user.passwordHash);
      if (!passwordCorrect) {
        res;
      }
    } catch (error) {}
  }
}

module.exports = LoginController;
