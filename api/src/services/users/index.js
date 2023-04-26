const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const usersModel = require('../../libs/database/models/users');

class UsersService {
  constructor() {}

  //* Obtener todos los usuario.
  async findAll() {
    const getAllUsers = await usersModel.findAll();
    return getAllUsers;
  }

  //* Obtener usuario por nickName.
  async findOne(nickName) {
    const findOneUser = await usersModel.findByPk(nickName);
    if (findOneUser === null) {
      throw new Error(
        `El usuario con el nickName ${nickName} no se encuentra en nuestra base de datos.`
      );
    } else {
      return findOneUser;
    }
  }

  //* Crear un usuario.
  async create({
    nickName,
    email,
    firstName,
    lastName,
    dateOfBirth,
    genre,
    nationality,
    image,
    password,
    role,
  }) {
    const newUser = await usersModel.create({
      nickName,
      email,
      firstName,
      lastName,
      dateOfBirth,
      genre,
      nationality,
      image,
      password,
      role,
    });

    return {
      message: 'Creado',
      data: [newUser],
    };
  }

  //* Editar un usuario.
  async update(
    nickName,
    {
      email,
      firstName,
      lastName,
      dateOfBirth,
      genre,
      nationality,
      image,
      password,
      role,
    }
  ) {
    const updateUser = await usersModel.findByPk(nickName);
  }

  //* Borrar un usuario.
  async delete(nickName) {
    const deleteUser = await usersModel.destroy({ where: { nickName } });
    console.log(deleteUser);
    if (deleteUser === 0) {
      throw new Error(
        `El usuario con el nickName ${nickName} no se encuentra en nuestra base de datos.`
      );
    } else {
      return {
        message: 'Borrado',
        data: deleteUser,
      };
    }
  }
}

module.exports = UsersService;
