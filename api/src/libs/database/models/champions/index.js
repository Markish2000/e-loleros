const { DataTypes } = require('sequelize');
const sequelize = require('../../index');
const sharp = require('sharp');
const rp = require('request-promise-native');

const champions = sequelize.define('champions', {
  name: {
    type: DataTypes.STRING(55),
    primaryKey: true,
    allowNull: false,
  },

  image: {
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

  role: {
    type: DataTypes.STRING(10),
    allowNull: false,
    validate: {
      isIn: [['ASESINO', 'LUCHADOR', 'MAGO', 'TIRADOR', 'SOPORTE', 'TANQUE']],
    },
  },

  difficulty: {
    type: DataTypes.STRING(10),
    allowNull: false,
    validate: {
      isIn: [['BAJA', 'MODERADA', 'ALTA']],
    },
  },

  history: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  skills: {
    type: DataTypes.ARRAY(DataTypes.JSON),
  },

  skins: {
    type: DataTypes.ARRAY(DataTypes.JSON),
  },
});

module.exports = champions;
