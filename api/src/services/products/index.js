const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const productsModel = require('../../libs/database/models/products');
const regex = /[^a-zA-Z0-9]/;

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
    if (!findOneProduct) {
      throw new Error(
        `El producto con el id ${id} no se encuentra en nuestra base de datos.`
      );
    }
    return findOneProduct;
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
    if (!title) {
      throw new Error(
        `No se ha recibido el title del producto, el mismo es obligatorio.`
      );
    }
    if (!price) {
      throw new Error(
        `No se ha recibido el price del producto, el mismo es obligatorio.`
      );
    }
    if (!detail) {
      throw new Error(
        `No se ha recibido el detail del producto, el mismo es obligatorio.`
      );
    }
    if (!mainImage) {
      throw new Error(
        `No se ha recibido el mainImage del producto, el mismo es obligatorio.`
      );
    }
    if (!images) {
      throw new Error(
        `No se ha recibido el images del producto, el mismo es obligatorio.`
      );
    }
    if (!stock) {
      throw new Error(
        `No se ha recibido el stock del producto, el mismo es obligatorio.`
      );
    }
    if (!availability) {
      throw new Error(
        `No se ha recibido el stock del producto, el mismo es obligatorio.`
      );
    }
    if (regex.test(title)) {
      throw new Error(
        `Se recibió el símbolo ${title} y no se aceptan símbolos.`
      );
    }
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
    if (!title) {
      throw new Error(
        `No se ha recibido el history del campeón, el mismo es obligatorio.`
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
      throw new Error(
        `El producto con el id ${id} no se encuentra en nuestra base de datos.`
      );
    }
    return {
      message: 'Borrado',
      data: id,
    };
  }
}

module.exports = ProductsService;
