const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const championsModel = require('../../libs/database/models/champions');

class ChampionsService {
  constructor() {}

  //* Obtener todos los campeones.
  async findAll(query) {
    const options = {
      limit: 9,
      offset: 0,
    };

    options.where = {};

    if (query.limit) {
      options.limit = query.limit;
    }

    if (query.page) {
      const page = parseInt(query.page);
      if (isNaN(page) || page < 1) {
        throw new Error('El número de página es invalido.');
      }
      options.offset = (page - 1) * (options.limit || query.limit);
    }

    const championLimit = options.limit;

    const totalChampions = await championsModel.count(options);

    const findAllChampions = await championsModel.findAll(options, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (findAllChampions.length === 0) {
      throw new Error('La base de datos está vacía.');
    }
    return {
      champions: findAllChampions,
      championLimit,
      totalChampions,
    };
  }

  //* Obtener campeón por name.
  async findOne(name) {
    const findOneChampion = await championsModel.findByPk(name, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (!findOneChampion) {
      throw new Error(
        `No existe el campeón con el name ${name} en nuestra base de datos.`
      );
    }
    return findOneChampion;
  }

  //* Crear un campeón.
  async create({ name, image, role, difficulty, history, skills, skins }) {
    const existingChampion = await championsModel.findByPk(name);
    const validateString = parseInt(name);
    if (validateString) {
      throw new Error(
        `El name del campeón no es válido debido a que ${name} es un número y no se aceptan números.`
      );
    }
    if (existingChampion) {
      throw new Error(
        `El campeón con el name ${name} ya existe en nuestra base de datos.`
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

  //* Editar un campeón.
  async update(name, { image, role, difficulty, history, skills, skins }) {
    const champion = await championsModel.findByPk(name, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (!champion) {
      throw new Error(
        `El campeón con el name ${name} no se encuentra en nuestra base de datos.`
      );
    }
    if (skills.length !== 5) {
      throw new Error(
        `Los campeones deben poseer 5 skills y se está recibiendo ${skills.length} skills.`
      );
    }

    const updatedChampion = await champion.update({
      image: image ?? champion.image,
      role: role ?? champion.role,
      difficulty: difficulty ?? champion.difficulty,
      history: history ?? champion.history,
      skills: skills ?? champion.skills,
      skins: skins ?? champion.skins,
    });

    return {
      message: `El campeón con el name ${name} se ha actualizado con éxito.`,
      data: updatedChampion,
    };
  }

  //* Borrar un campeón.
  async delete(name) {
    const deleteChampion = await championsModel.destroy({
      where: { name },
    });
    if (deleteChampion === 0) {
      throw new Error(
        `El campeón con el name ${name} no se encuentra en nuestra base de datos.`
      );
    }
    return {
      message: 'Borrado',
      data: deleteChampion,
    };
  }
}

module.exports = ChampionsService;
