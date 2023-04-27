const ProductsService = require('../../services/products');
const service = new ProductsService();

class LoginController {
  constructor() {}

  //* Obtener todos los productos.
  async findAll(req, res, next) {
    try {
      const { nickName } = req.body;
    } catch (error) {}
  }
}

module.exports = LoginController;
