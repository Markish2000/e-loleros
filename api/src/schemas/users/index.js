const Joi = require('joi');

const currentDate = new Date();
const greaterDate = `${currentDate.getFullYear() - 99}-${
  currentDate.getMonth() + 1
}-${currentDate.getDate()}`;
const lessDate = `${currentDate.getFullYear() - 18}-${
  currentDate.getMonth() + 1
}-${currentDate.getDate()}`;
const nickName = Joi.string().alphanum().min(3).max(25);
const email = Joi.string().email();
const firstName = Joi.string()
  .regex(/^[a-zA-Z]+$/)
  .min(3)
  .max(55);
const lastName = Joi.string()
  .regex(/^[a-zA-Z]+$/)
  .min(3)
  .max(55);
const dateOfBirth = Joi.date().greater(greaterDate).less(lessDate);
const genre = Joi.string().valid(
  'Femenino',
  'Masculino',
  'No binario',
  'Prefiero no decirlo',
  'Otro'
);
const nationality = Joi.string()
  .regex(/^[a-zA-Z]+$/)
  .max(50);
const image = Joi.string().uri();
const password = Joi.string().min(8);
const role = Joi.string()
  .regex(/^[a-zA-Z]+$/)
  .valid('admin', 'cliente');

const createUserSchema = Joi.object({
  nickName: nickName.required(),
  password: password.required(),
  email: email.required(),
  genre: genre.required(),
  nationality: nationality,
  dateOfBirth: dateOfBirth.required(),
  firstName: firstName.required(),
  lastName: lastName,
  image: image.required(),
});

const updateUserSchema = Joi.object({
  nationality: nationality,
  nickName: nickName,
  password: password,
  email: email,
  genre: genre,
  role: role,
  dateOfBirth: dateOfBirth,
  firstName: firstName,
  lastName: lastName,
  image: image,
});

const getOneUserSchema = Joi.object({
  nickName: nickName.required(),
});

const deleteUserSchema = Joi.object({
  nickName: nickName.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getOneUserSchema,
  deleteUserSchema,
};
