const { Op } = require('sequelize');
const sequelize = require('../../libs/database');
const usersModel = require('../../libs/database/models/users');
const regex = /[^a-zA-Z0-9]/;

class UsersService {
  constructor() {}

  //* Obtener todos los usuarios.
  async findAll() {
    const getAllUsers = await usersModel.findAll();
    if (getAllUsers.length === 0) {
      throw new Error('La base de datos está vacía.');
    }
    return getAllUsers;
  }

  //* Obtener usuario por nickName.
  async findOne(nickName) {
    const findOneUser = await usersModel.findByPk(nickName);
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

    if (!nickName) {
      throw new Error(
        `No se ha recibido el name del campeón, el mismo es obligatorio.`
      );
    }
    if (!email) {
      throw new Error(
        `No se ha recibido el email del campeón, el mismo es obligatorio.`
      );
    }
    if (!firstName) {
      throw new Error(
        `No se ha recibido el firstName del campeón, el mismo es obligatorio.`
      );
    }
    if (!lastName) {
      throw new Error(
        `No se ha recibido el lastName del campeón, el mismo es obligatorio.`
      );
    }
    if (!dateOfBirth) {
      throw new Error(
        `No se ha recibido el dateOfBirth del campeón, el mismo es obligatorio.`
      );
    }
    if (!genre) {
      throw new Error(
        `No se ha recibido el genre del campeón, el mismo es obligatorio.`
      );
    }
    if (!nationality) {
      throw new Error(
        `No se ha recibido el nationality del campeón, el mismo es obligatorio.`
      );
    }
    if (!password) {
      throw new Error(
        `No se ha recibido el password del campeón, el mismo es obligatorio.`
      );
    }
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
      password,
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
