const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const championsModel = require('../../libs/database/models/champions');

class ChampionsService {
  constructor() {}

  //* Obtener todos los productos.
  async findAll() {
    const response = await championsModel.findAll();
    if (response.length === 0) {
      throw new Error('La base de datos está vacía.');
    } else {
      return response;
    }
  }

  //* Obtener producto por id.
  async findOne(id) {}

  //* Crear un producto.
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

  //* Editar un producto.
  async update() {}

  //* Borrar un producto.
  async delete(id) {}
}

module.exports = ChampionsService;
