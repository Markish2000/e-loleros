const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const products = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  price: {
    type: DataTypes.INTEGER(),
    allowNull: false,
  },

  detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  mainImage: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  images: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
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
