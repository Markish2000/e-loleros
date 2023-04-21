const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const products = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = products;
