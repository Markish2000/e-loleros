const ChampionsService = require('../../services/champions');
const service = new ChampionsService();

class ChampionsController {
  constructor() {}

  //* Obtener todos los productos.
  async findAll(req, res, next) {
    try {
      const response = await service.findAll();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  //* Obtener producto por id.
  async findOne(req, res, next) {
    try {
      const { name } = req.params;
      const response = await service.findOne(name);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  //* Crear un producto.
  async create(req, res, next) {
    try {
      const body = req.body;
      const response = await service.create(body);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  //* Editar un producto.
  async update(req, res, next) {
    try {
      const { name } = req.params;
      const body = req.body;
      const response = await service.update(name, body);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  //* Borrar un producto.
  async delete(req, res, next) {
    try {
      const { name } = req.params;
      const response = await service.delete(name);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ChampionsController;
