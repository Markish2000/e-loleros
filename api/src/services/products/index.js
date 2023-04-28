const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const productsModel = require('../../libs/database/models/products');

class ProductsService {
  constructor() {}

  //* Obtener todos los productos.
  async findAll(query) {
    const options = {
      limit: 9,
      offset: 0,
    };

    options.where = {};

    // if (query.category) {
    //   options.where.category = { [Op.like]: query.category };
    // }

    if (query.limit) {
      options.limit = query.limit;
    }

    if (query.page) {
      const page = parseInt(query.page);
      if (isNaN(page) || page < 1) {
        throw new Error('Número de página invalido.');
      }
      options.offset = (page - 1) * (options.limit || query.limit);
    }

    const productLimit = options.limit;

    const totalProducts = await productsModel.count(options);

    const findAllProducts = await productsModel.findAll(options);

    if (findAllProducts.length === 0) {
      throw new Error('La base de datos está vacía.');
    } else {
      return {
        products: findAllProducts,
        productLimit,
        totalProducts,
      };
    }
  }

  //* Obtener producto por id.
  async findOne(id) {
    const findOneProduct = await productsModel.findByPk(id);
    if (findOneProduct === null) {
      throw new Error(
        `El producto con el id ${id} no se encuentra en nuestra base de datos.`
      );
    } else {
      return findOneProduct;
    }
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
      data: [newProduct],
    };
  }

  //* Editar un producto.
  async update(
    id,
    { stock, availability, title, price, detail, mainImage, images }
  ) {
    const product = await productsModel.findByPk(id);
    if (!product) {
      throw new Error(
        `El producto con el id ${id} no se encuentra en nuestra base de datos.`
      );
    }

    const updatedProduct = await product.update({
      stock: stock ?? product.stock,
      availability: availability ?? product.availability,
      title: title ?? product.title,
      price: price ?? product.price,
      detail: detail ?? product.detail,
      mainImage: mainImage ?? product.mainImage,
      images: images ?? product.images,
    });

    return {
      message: `El producto con el id ${id} se ha actualizado con éxito.`,
      data: updatedProduct,
    };
  }

  //* Borrar un producto.
  async delete(id) {
    const deleteProduct = await productsModel.destroy({
      where: { id },
    });

    if (deleteProduct === 0) {
      `El producto con el id ${id} no se encuentra en nuestra base de datos.`;
    } else {
      return {
        message: 'Borrado',
        data: id,
      };
    }
  }
}

module.exports = ProductsService;
