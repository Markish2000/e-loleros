const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const championsModel = require('../../libs/database/models/champions');
const regex = /[^a-zA-Z0-9]/;

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
    const findOneChampion = await championsModel.findByPk(name);
    const validateString = parseInt(name);
    if (validateString) {
      throw new Error(
        `El name del campeón no es válido debido a que ${name} es un número y no se aceptan números.`
      );
    }
    if (regex.test(name)) {
      throw new Error(
        `Usted ha enviado el símbolo ${name} y no se aceptan símbolos.`
      );
    }
    if (findOneChampion === null) {
      throw new Error(
        `No existe el campeón con el name ${name} en nuestra base de datos.`
      );
    } else {
      return findOneChampion;
    }
  }

  //* Crear un champion.
  async create({ name, image, role, difficulty, history, skills, skins }) {
    const existingChampion = await championsModel.findByPk(name);
    const validateString = parseInt(name);
    if (!name) {
      throw new Error(
        `No se ha recibido el name del campeón, el mismo es obligatorio.`
      );
    }
    if (!image) {
      throw new Error(
        `No se ha recibido el image del campeón, el mismo es obligatorio.`
      );
    }
    if (!role) {
      throw new Error(
        `No se ha recibido el role del campeón, el mismo es obligatorio.`
      );
    }
    if (!difficulty) {
      throw new Error(
        `No se ha recibido el difficulty del campeón, el mismo es obligatorio.`
      );
    }
    if (!history) {
      throw new Error(
        `No se ha recibido el history del campeón, el mismo es obligatorio.`
      );
    }
    if (!skills) {
      throw new Error(
        `No se ha recibido el skills del campeón, el mismo es obligatorio.`
      );
    }
    if (!skins) {
      throw new Error(
        `No se ha recibido el skins del campeón, el mismo es obligatorio.`
      );
    }
    if (validateString) {
      throw new Error(
        `El name del campeón no es válido debido a que ${name} es un número y no se aceptan números.`
      );
    }
    if (regex.test(name)) {
      throw new Error(
        `Se recibió el símbolo ${name} y no se aceptan símbolos.`
      );
    }
    if (existingChampion) {
      throw new Error(
        `El campeón con el name ${name} ya existe en nuestra base de datos.`
      );
    }
    // const allowedDifficulties = ['BAJA', 'MODERADA', 'ALTA'];
    // const difficultyIsValid = allowedDifficulties.includes(difficulty);
    // if (!difficultyIsValid) {
    //   throw new Error(
    //     `La dificultad sólo puede ser: BAJA, MODERADA o ALTA y se está recibiendo ${difficulty}.`
    //   );
    // }

    // const allowedRoles = [
    //   'ASESINO',
    //   'LUCHADOR',
    //   'MAGO',
    //   'TIRADOR',
    //   'SOPORTE',
    //   'TANQUE',
    // ];
    // const roleIsValid = allowedRoles.includes(role);
    // if (!roleIsValid) {
    //   throw new Error(
    //     `El rol sólo puede ser: ASESINO, LUCHADOR, MAGO, TIRADOR, SOPORTE o TANQUE y se está recibiendo ${role}.`
    //   );
    // }

    // const expectedSkillsLength = 5;
    // const skillsLengthIsValid = skills.length === expectedSkillsLength;
    // if (!skillsLengthIsValid) {
    //   throw new Error(
    //     `Sólo se puede recibir 5 skills y se está recibiendo ${skills.length} skills.`
    //   );
    // }
    if (skills.length !== 5) {
      throw new Error(
        `Los campeones deben poseer 5 skills y se está recibiendo ${skills.length} skills.`
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
  async update(name, { image, role, difficulty, history, skills, skin }) {
    const champion = await championsModel.findByPk(name);
    if (!champion) {
      throw new Error(
        `El campeón con el name ${name} no se encuentra en nuestra base de datos.`
      );
    }
    if (!history) {
      throw new Error(
        `No se ha recibido el history del campeón, el mismo es obligatorio.`
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
      skin: skin ?? champion.skin,
    });

    return {
      message: `El campeón con el name ${name} se ha actualizado con éxito.`,
      data: updatedChampion,
    };
  }

  //* Borrar un champion.
  async delete(name) {
    const validateString = parseInt(name);
    if (validateString) {
      throw new Error(
        `El name del campeón no es válido debido a que ${name} es un número y no se aceptan números.`
      );
    }
    if (regex.test(name)) {
      throw new Error(
        `Usted ha enviado el símbolo ${name} y no se aceptan símbolos.`
      );
    }
    const deleteChampion = await championsModel.destroy({
      where: { name },
    });
    if (deleteChampion === 0) {
      throw new Error(
        `El campeón con el name ${name} no se encuentra en nuestra base de datos.`
      );
    } else {
      return {
        message: 'Borrado',
        data: deleteChampion,
      };
    }
  }
}

module.exports = ChampionsService;
