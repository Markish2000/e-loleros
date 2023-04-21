const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const products = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = products;
