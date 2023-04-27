const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const usersModel = require('../../libs/database/models/users');

class UsersService {
  constructor() {}

  //* Obtener todos los usuario.
  async findAll() {
    const getAllUsers = await usersModel.findAll();
    if (getAllUsers.length === 0) {
      throw new Error('La base de datos está vacía.');
    } else {
      return getAllUsers;
    }
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
    const validateNickName = await usersModel.findByPk(nickName);
    const validateEmail = await usersModel.findOne({ where: { email: email } });
    if (validateNickName && validateEmail) {
      throw new Error(
        `El nickName ${nickName} y el email ${email} ya existen que nuestra base de datos.`
      );
    } else if (validateNickName) {
      throw new Error(
        `El nickName ${nickName} ya existe en nuestra base de datos.`
      );
    } else if (validateEmail) {
      throw new Error(`El email ${email} ya existe en nuestra base de datos.`);
    } else {
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
    if (updateUser === null) {
      throw new Error(
        `El usuario con el nickName ${nickName} no se encuentra en nuestra base de datos.`
      );
    } else {
      updateUser.email = email || updateUser.email;
      updateUser.firstName = firstName || updateUser.firstName;
      updateUser.lastName = lastName || updateUser.lastName;
      updateUser.dateOfBirth = dateOfBirth || updateUser.dateOfBirth;
      updateUser.genre = genre || updateUser.genre;
      updateUser.nationality = nationality || updateUser.nationality;
      updateUser.image = image || updateUser.image;
      updateUser.password = password || updateUser.password;
      updateUser.role = role || updateUser.role;
      await updateUser.save();
      return {
        message: `El usuario con el nickName ${nickName} se ha actualizado con éxito.`,
        data: updateUser,
      };
    }
  }

  //* Borrar un usuario.
  async delete(nickName) {
    const deleteUser = await usersModel.destroy({ where: { nickName } });
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
