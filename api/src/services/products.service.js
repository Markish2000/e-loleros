const { Op } = require('sequelize');
const sequelize = require('../libs/database/index');
const productsModel = require('../libs/database/models/products.model');

class ProductsService {
  constructor() {}
  async find() {
    const response = 'Hola esto funciona y estoy en el service';
    return response;
  }
}

module.exports = ProductsService;
