const { DataTypes } = require('sequelize');
const sequelize = require('../../index');
const imageSize = require('image-size');
const { createReadStream } = require('fs');
const { promisify } = require('util');
const sharp = require('sharp');
const rp = require('request-promise-native');

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

      async isValidImage(value) {
        try {
          const buffer = await rp.get({ url: value, encoding: null });
          const metadata = await sharp(buffer).metadata();
          if (metadata.width < 1 || metadata.height < 1) {
            throw new Error('La imagen es inválida.');
          }
        } catch (error) {
          throw new Error('No se pudo obtener las dimensiones de la imagen.');
        }
      },
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
