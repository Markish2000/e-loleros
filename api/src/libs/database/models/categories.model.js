const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const categories = sequelize.define('categories', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Accounts',
    validate: {
      isIn: [
        [
          'Accounts',
          'Skins',
          'Elo Boost',
          'Duo Boost',
          'Professional Technical Coaching',
        ],
      ],
    },
  },
});

module.exports = categories;
