const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const usersModel = require('../../libs/database/models/users');
const bcrypt = require('bcrypt');
const generateToken = require('../../helpers/token/generateToken');

class LoginService {
  constructor() {}

  async login(email, password) {
    const user = await usersModel.findOne({
      where: { email },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (!user) {
      throw new Error(`El email ${email} no existe en nuestra base de datos.`);
    }
    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
      throw new Error('La contraseña es incorrecta.');
    }
    const token = await generateToken(user);
    delete user.dataValues.password;
    return { message: 'Se ha iniciado sesión con éxito.', token };
  }
}

module.exports = LoginService;
