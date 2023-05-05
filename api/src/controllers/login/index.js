const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const LoginService = require('../../services/login');
const service = new LoginService();

class LoginController {
  constructor() {}

  //* Iniciar sesión localmente.
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await service.login(email.toLowerCase(), password);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async google(req, res, next) {
    try {
      const user = req.user;
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LoginController;
