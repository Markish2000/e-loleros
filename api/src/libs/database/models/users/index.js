const { DataTypes } = require('sequelize');
const sequelize = require('../../index');
const sharp = require('sharp');
const rp = require('request-promise-native');

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
