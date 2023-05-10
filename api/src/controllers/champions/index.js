const ChampionsService = require('../../services/champions');
const service = new ChampionsService();

class ChampionsController {
  constructor() {}

  //* Obtener todos los campeones.
  async findAll(req, res, next) {
    try {
      const page = req.query.page;
      const query = req.query;

      const response = await service.findAll(query);

      let pages = '';

      if (response.totalChampions <= response.championLimit) {
        pages = 1;
      } else {
        pages = Math.ceil(response.totalChampions / response.championLimit);
      }

      const pageNumber = parseInt(page);

      const totalResponse = { data: response, pageNumber, pages };

      res.status(200).json(totalResponse);
    } catch (error) {
      next(error);
    }
  }

  //* Obtener campeón por id.
  async findOne(req, res, next) {
    try {
      const { name } = req.params;
      const response = await service.findOne(name);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  //* Crear un campeón.
  async create(req, res, next) {
    try {
      const body = req.body;
      const response = await service.create(body);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  //* Editar un campeón.
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

  //* Borrar un campeón.
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
