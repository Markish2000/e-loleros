const Joi = require('joi');

const name = Joi.string()
  .regex(/^[a-zA-Z]+$/)
  .min(3)
  .max(20);
const image = Joi.string().uri();
const role = Joi.string().valid(
  'ASESINO',
  'LUCHADOR',
  'MAGO',
  'TIRADOR',
  'SOPORTE',
  'TANQUE'
);
const difficulty = Joi.string().valid('BAJA', 'MODERADA', 'ALTA');
const history = Joi.string();
const skills = Joi.array()
  .length(5)
  .items(
    Joi.object({
      tecla: Joi.string().valid('PASIVA', 'Q', 'W', 'E', 'R'),
      name: Joi.string().min(3).max(20),
      detail: Joi.string(),
      video: Joi.string().uri(),
    })
  );
const skins = Joi.array().items(
  Joi.object({
    name: Joi.string().min(3).max(100),
    image: Joi.string().uri(),
  })
);

const createChampionSchema = Joi.object({
  name: name.required(),
  image: image.required(),
  role: role.required(),
  difficulty: difficulty.required(),
  history: history.required(),
  skills: skills.required(),
  skins: skins.required(),
});

const updateChampionSchema = Joi.object({
  name: name,
  image: image,
  role: role,
  difficulty: difficulty,
  history: history,
  skills: skills,
  skins: skins,
});

const getOneChampionSchema = Joi.object({
  name: name.required(),
});

const deleteChampionSchema = Joi.object({
  name: name.required(),
});

module.exports = {
  createChampionSchema,
  updateChampionSchema,
  getOneChampionSchema,
  deleteChampionSchema,
};
