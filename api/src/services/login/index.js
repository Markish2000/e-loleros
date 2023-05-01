const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const championsModel = require('../../libs/database/models/champions');
const regex = /[^a-zA-Z0-9]/;

class ChampionsService {
  constructor() {}

  //* Obtener campeón por name.
  async findOne(name) {
    const findOneChampion = await championsModel.findByPk(name);
    const validateString = parseInt(name);
    if (!findOneChampion) {
      throw new Error(
        `No existe el campeón con el name ${name} en nuestra base de datos.`
      );
    }
    if (regex.test(name)) {
      throw new Error(
        `Se recibió el símbolo ${name} y no se aceptan símbolos.`
      );
    }
    if (validateString) {
      throw new Error(
        `El name del campeón no es válido debido a que ${name} es un número y no se aceptan números.`
      );
    }
    return findOneChampion;
  }
}

module.exports = ChampionsService;
