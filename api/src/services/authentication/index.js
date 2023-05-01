const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const championsModel = require('../../libs/database/models/champions');
const regex = /[^a-zA-Z0-9]/;
const jwt = require('jsonwebtoken');
require('dotenv').config();
class AuthenticationService {
  constructor() {}

  //* Obtener campeón por name.
  async findOne(nickName) {}
}

module.exports = AuthenticationService;
