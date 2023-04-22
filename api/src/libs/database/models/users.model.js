const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const users = sequelize.define('users', {
  nickName: {
    type: DataTypes.STRING(55),
    primaryKey: true,
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  firstName: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },

  lastName: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },

  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },

  genre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [
        ['Femenino', 'Masculino', 'No binario', 'Prefiero no decirlo', 'Otro'],
      ],
    },
  },

  nationality: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  image: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue:
      'https://lol-skin.weblog.vc/img/wallpaper/tiles/Vayne_25.webp',
    validate: {
      isUrl: true,
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'cliente',
  },

  // recoveryToken: {},

  // google: {},

  // recoveryToken: {},
});

module.exports = users;
