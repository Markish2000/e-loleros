const { DataTypes } = require('sequelize');
const sequelize = require('../../index');

const categories = sequelize.define('categories', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Cuentas',
    validate: {
      isIn: [
        [
          'Cuentas',
          'Skins',
          'Elo Boost',
          'Duo Boost',
          'Coaching técnico profesional',
        ],
      ],
    },
  },
});

module.exports = categories;
