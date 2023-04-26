const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const usersModel = require('../../libs/database/models/users');

class UsersService {
  constructor() {}

  //* Obtener todos los productos.
  async findAll() {
    const response = usersModel.findAll();
    return response;
  }

  //* Obtener producto por id.
  async findOne() {}

  //* Crear un producto.
  async create() {}

  //* Editar un producto.
  async update() {}
}

module.exports = UsersService;
