const ProductsService = require('../../services/products');
const service = new ProductsService();
const MailerService = require('../../services/nodemailer');
const mailer = new MailerService();
class ProductsController {
  constructor() {}

  //* Obtener todos los productos.
  async findAll(req, res, next) {
    try {
      const page = req.query.page;
      const query = req.query;

      const response = await service.findAll(query);

      let pages = '';
      if (response.totalProducts <= response.productLimit) {
        pages = 1;
      } else {
        pages = Math.ceil(response.totalProducts / response.productLimit);
      }

      const pageNumber = parseInt(page);
      const totalResponse = { data: response, pageNumber, pages };
      res.status(200).json(totalResponse);
    } catch (error) {
      next(error);
    }
  }

  //* Obtener producto por id.
  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const response = await service.findOne(id);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  //* Crear un producto.
  async create(req, res, next) {
    try {
      const body = req.body;
      const createNewProduct = await service.create(body);
      res.status(200).json(createNewProduct);
    } catch (error) {
      next(error);
    }
  }

  //* Editar un producto.
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const body = req.body;
      const response = await service.update(id, body);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  //* Borrar un producto.
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteProduct = await service.delete(id);
      res.status(200).json(deleteProduct);
    } catch (error) {
      next(error);
    }
  }

  //* Comprar un producto.
  async buyOneProduct(req, res, next) {
    try {
      const body = req.body;
      const buyOneProduct = await service.buyOneProduct(body);
      res.status(200).json(buyOneProduct);
    } catch (error) {
      next(error);
    }
  }

  async buySuccess(req, res, next) {
    try {
      const { email } = req.query;
      mailer.buySuccess(email);
      res.redirect(`http://localhost:3000/home`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductsController;
