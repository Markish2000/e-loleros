const usersService = require('../../services/users');
const service = new usersService();

class UsersController {
  constructor() {}

  //* Obtener todos los productos.
  async findAll(req, res, next) {
    try {
      const response = service.findAll();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  //* Obtener producto por id.
  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const response = service.findOne(id);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  //* Crear un producto.
  async create(req, res, next) {
    try {
      const body = req.body;
      const response = service.create(body);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  //* Editar un producto.
  async update(req, res, next) {
    try {
      const body = req.body;
      const response = service.create(body);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  //* Borrar un producto.
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const response = service.create(id);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UsersController;
