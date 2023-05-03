const schemaValidation = (schema, property) => {
  if (!schema || typeof schema.validate !== 'function') {
    throw new Error('Schema invalido');
  }
  if (!property || typeof property !== 'string') {
    throw new Error('Invalid property name');
  }
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    try {
      next();
    } catch (err) {
      res.status(500).json({ error: 'Error con el servidor interno.' });
    }
  };
};

module.exports = schemaValidation;
