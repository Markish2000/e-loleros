const { DataTypes } = require('sequelize');
const sequelize = require('../../index');
const imageSize = require('image-size');
const { createReadStream } = require('fs');
const { promisify } = require('util');

const asyncGetSize = promisify(imageSize);

const products = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  mainImage: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isUrl: true,
      // isValidImage(value) {
      //   return (async function () {
      //     try {
      //       const { width, height } = await asyncGetSize(
      //         createReadStream(value)
      //       );
      //       if (width < 1 || height < 1) {
      //         throw new Error('La imagen es inválida.');
      //       }
      //     } catch (error) {
      //       throw new Error('La URL de la imagen es inválida.');
      //     }
      //   })();
      // },
    },
  },

  images: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },

  stock: {
    type: DataTypes.INTEGER,
    allowNull: true,
    get() {
      const stockValue = this.getDataValue('stock');
      return stockValue < 0 ? 0 : stockValue;
    },
  },

  availability: {
    type: DataTypes.BOOLEAN,
    get() {
      if (this.stock <= 0) {
        return false;
      } else {
        return this.getDataValue('availability');
      }
    },
  },
});

module.exports = products;
