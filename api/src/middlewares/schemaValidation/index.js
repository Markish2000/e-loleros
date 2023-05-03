const schemaValidation = (req, res, next) => {
  try {
    req.body();
    next();
  } catch (error) {
    res.status(400).json({ error: 'Hubo un problema con la validación.' });
  }
};
module.exports = schemaValidation;
