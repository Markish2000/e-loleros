const { DataTypes } = require('sequelize');
const sequelize = require('../../index');
const imageSize = require('image-size');
const { createReadStream } = require('fs');
const { promisify } = require('util');

const asyncGetSize = promisify(imageSize);

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
      // isValidImage(value) {
      //   return (async function () {
      //     try {
      //       const { width, height } = await asyncGetSize(
      //         createReadStream(value)
      //       );
      //       if (width < 1 || height < 1) {
      //         throw new Error('La imagen es inválida.');
      //       }
      //     } catch (error) {
      //       throw new Error('La URL de la imagen es inválida.');
      //     }
      //   })();
      // },
    },
  },

  role: {
    type: DataTypes.STRING(10),
    allowNull: false,
    validate: {
      isIn: [['Asesino', 'Luchador', 'Mago', 'Tirador', 'Soporte', 'Tanque']],
    },
  },

  difficulty: {
    type: DataTypes.STRING(10),
    allowNull: false,
    validate: {
      isIn: [['Fácil', 'Medio', 'Difícil']],
    },
  },

  history: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  skills: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },

  skins: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },
});

module.exports = champions;