const { DataTypes } = require('sequelize');
const sequelize = require('../../index');

const items = sequelize.define('items', {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  image: {},
  detail: {},
});

module.exports = items;
