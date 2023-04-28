const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const championsModel = require('../../libs/database/models/champions');

class ChampionsService {
  constructor() {}

  //* Obtener todos los champions.
  async findAll() {
    const findAllChampions = await championsModel.findAll();
    if (findAllChampions.length === 0) {
      throw new Error('La base de datos está vacía.');
    } else {
      return findAllChampions;
    }
  }

  //* Obtener champion por name.
  async findOne(name) {
    const validateString = parseInt(name);
    if (validateString) {
      throw new Error(
        `El nombre del campeón no es válido debido a que ${name} es un número.`
      );
    }
    const findOneChampion = await championsModel.findByPk(name);
    if (findOneChampion === null) {
      throw new Error(`No existe el campeón ${name} en nuestra base de datos.`);
    } else {
      return findOneChampion;
    }
  }

  //* Crear un champion.
  async create({ name, image, role, difficulty, history, skills, skins }) {
    const validateName = await championsModel.findByPk(name);
    if (validateName) {
      throw new Error(
        `El campeón con el nombre ${name} ya existe en nuestra base de datos.`
      );
    }
    if (
      difficulty !== 'BAJA' &&
      difficulty !== 'MODERADA' &&
      difficulty !== 'ALTA'
    ) {
      throw new Error(
        `La dificultad sólo puede ser: BAJA, MODERADA o ALTA y estoy recibiendo ${difficulty}`
      );
    }

    if (
      role !== 'ASESINO' &&
      role !== 'LUCHADOR' &&
      role !== 'MAGO' &&
      role !== 'TIRADOR' &&
      role !== 'SOPORTE' &&
      role !== 'TANQUE'
    ) {
      throw new Error(
        `El rol sólo puede ser: ASESINO, LUCHADOR, MAGO, TIRADOR, SOPORTE o TANQUE y estoy recibiendo ${role}`
      );
    }
    if (skills.length !== 5) {
      throw new Error(
        `Sólo se pueden tener 5 skills y se está recibiendo ${skills.length} skills.`
      );
    }
    const newChampion = await championsModel.create({
      name,
      image,
      role,
      difficulty,
      history,
      skills,
      skins,
    });
    return {
      message: 'Creado',
      data: newChampion,
    };
  }

  //* Editar un champion.
  async update() {}

  //* Borrar un champion.
  async delete(id) {}
}

module.exports = ChampionsService;
