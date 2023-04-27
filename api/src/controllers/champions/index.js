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
  async findOne(req, res, next) {}

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
  async update(req, res, next) {}

  //* Borrar un producto.
  async delete(req, res, next) {}
}

module.exports = ChampionsController;
