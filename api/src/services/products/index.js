const { Op } = require('sequelize');
const sequelize = require('../../libs/database/index');
const productsModel = require('../../libs/database/models/products.model');

class ProductsService {
  constructor() {}

  //* Obtener todos los productos.
  async findAll() {
    const findAllProducts = await productsModel.findAll();

    if (findAllProducts.length === 0) {
      throw new Error('La base de datos está vacía.');
    } else {
      return {
        findAllProducts,
      };
    }
  }

  //* Obtener producto por id.
  async findOne() {
    const response = 'Hola esto funciona y estoy en el service';
    return response;
  }

  //* Crear un producto.
  async create({
    title,
    price,
    detail,
    mainImage,
    images,
    stock,
    availability,
  }) {
    const newProduct = await productsModel.create({
      title,
      price,
      detail,
      mainImage,
      images,
      stock,
      availability,
    });

    return {
      message: 'Creado',
      data: { newProduct },
    };
  }

  //* Editar un producto.
  async update() {
    const response = 'Hola esto funciona y estoy en el service';
    return response;
  }

  //* Borrar un producto.
  async delete(id) {
    const deleteProduct = await productsModel.destroy({
      where: { id },
    });

    if (deleteProduct === 0) {
      throw new Error('No existe el producto en nuestra base de datos.');
    } else {
      return {
        message: 'Borrado',
        data: id,
      };
    }
  }
}

module.exports = ProductsService;
