const ProductsService = require('../../services/products');
const service = new ProductsService();

class ProductsService {
  constructor() {}

  //* Obtener todos los productos.
  async findAll() {
    try {
      const response = await service.findAll();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductsService;
