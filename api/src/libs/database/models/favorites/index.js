const { DataTypes } = require('sequelize');
const sequelize = require('../../index');

const favorites = sequelize.define('favorites', {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  image: {
    type: DataTypes.TEXT,
    validate: {
      isUrl: true,
    },
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = favorites;
