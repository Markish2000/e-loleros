const { Op } = require('sequelize');
const sequelize = require('../libs/database/index');
const productsModel = require('../libs/database/models/products.model');

class ProductsService {
  constructor() {}

  //* Obtener todos los productos.
  async find() {
    const response = 'Hola esto funciona y estoy en el service';
    return response;
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
      title: title,
      price: price,
      detail: detail,
      mainImage: mainImage,
      images: images,
      stock: stock,
      availability: availability,
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
  async delete() {
    const response = 'Hola esto funciona y estoy en el service';
    return response;
  }
}

module.exports = ProductsService;
