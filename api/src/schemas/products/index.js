const Joi = require('joi');

const id = Joi.number();
const title = Joi.string()
  .regex(/^[a-zA-Z]+$/)
  .min(3)
  .max(30);
const price = Joi.number().greater(0);
const detail = Joi.string().min(5).max(255);
const mainImage = Joi.string().uri();
const images = Joi.array();
const stock = Joi.number();
const availability = Joi.boolean();
const category = Joi.string().valid(
  'Cuentas',
  'Skins',
  'Elo Boost',
  'Duo Boost',
  'Coaching técnico profesional'
);

const createProductSchema = Joi.object({
  title: title.required(),
  stock: stock.required(),
  price: price.required(),
  detail: detail.required(),
  mainImage: mainImage.required(),
  availability: availability.required(),
  category: category.required(),
  images: images.required(),
});

const getOneProductSchema = Joi.object({
  id: id.required(),
});

const updateProductSchema = Joi.object({
  title: title,
  price: price,
  stock: stock,
  detail: detail,
  mainImage: mainImage,
  availability: availability,
  category: category,
  images: images,
});

// const buyProductSchema = Joi.object({
//   id: id,
//   title: title,
//   price: price,
//   quantity: quantity,
//   email: email,
// });

module.exports = {
  getOneProductSchema,
  createProductSchema,
  updateProductSchema,
};
