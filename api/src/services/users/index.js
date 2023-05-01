const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const bcrypt = require('bcrypt');
const usersModel = require('../../libs/database/models/users');
const generateToken = require('../../helpers/token/generateToken');
const regex = /[^a-zA-Z0-9]/;

class UsersService {
  constructor() {}

  //* Obtener todos los usuarios.
  async findAll() {
    const getAllUsers = await usersModel.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    if (getAllUsers.length === 0) {
      throw new Error('La base de datos está vacía.');
    }
    return getAllUsers;
  }

  //* Obtener usuario por nickName.
  async findOne(nickName) {
    const findOneUser = await usersModel.findByPk(nickName, {
      attributes: {
        exclude: ['password'],
      },
    });
    const validateString = parseInt(nickName);
    if (validateString) {
      throw new Error(
        `El name del campeón no es válido debido a que ${nickName} es un número y no se aceptan números.`
      );
    }
    if (regex.test(nickName)) {
      throw new Error(
        `Se recibió el símbolo ${nickName} y no se aceptan símbolos.`
      );
    }
    if (!findOneUser) {
      throw new Error(
        `El usuario con el nickName ${nickName} no se encuentra en nuestra base de datos.`
      );
    }
    return findOneUser;
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
  }) {
    const validateNickName = await usersModel.findByPk(nickName);
    const validateEmail = await usersModel.findOne({ where: { email: email } });
    const hash = await bcrypt.hash(password, 10);

    if (validateNickName && validateEmail) {
      throw new Error(
        `El nickName ${nickName} y el email ${email} ya existen que nuestra base de datos.`
      );
    }
    if (validateNickName) {
      throw new Error(
        `El nickName ${nickName} ya existe en nuestra base de datos.`
      );
    }
    if (validateEmail) {
      throw new Error(`El email ${email} ya existe en nuestra base de datos.`);
    }
    const newUser = await usersModel.create({
      nickName,
      email,
      firstName,
      lastName,
      dateOfBirth,
      genre,
      nationality,
      image,
      password: hash,
    });

    const token = await generateToken(newUser);

    return {
      message: 'Creado',
      token,
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
    const user = await usersModel.findByPk(nickName);
    if (!user) {
      throw new Error(
        `El usuario con el nickName ${nickName} no se encuentra en nuestra base de datos.`
      );
    }
    const updatedUser = await user.update({
      email: email ?? user.email,
      firstName: firstName ?? user.firstName,
      lastName: lastName ?? user.lastName,
      dateOfBirth: dateOfBirth ?? user.dateOfBirth,
      genre: genre ?? user.genre,
      nationality: nationality ?? user.nationality,
      image: image ?? user.image,
      password: password ?? user.password,
      role: role ?? user.role,
    });

    return {
      message: `El usuario con el nickName ${nickName} se ha actualizado con éxito.`,
      data: updatedUser,
    };
  }

  //* Borrar un usuario.
  async delete(nickName) {
    const validateString = parseInt(nickName);
    if (validateString) {
      throw new Error(
        `El nickName del usuario no es válido debido a que ${nickName} es un número y no se aceptan números.`
      );
    }
    if (regex.test(nickName)) {
      throw new Error(
        `Se recibió el símbolo ${nickName} y no se aceptan símbolos.`
      );
    }
    const deleteUser = await usersModel.destroy({ where: { nickName } });
    if (deleteUser === 0) {
      throw new Error(
        `El usuario con el nickName ${nickName} no se encuentra en nuestra base de datos.`
      );
    }

    return {
      message: 'Borrado',
      data: deleteUser,
    };
  }
}

module.exports = UsersService;
