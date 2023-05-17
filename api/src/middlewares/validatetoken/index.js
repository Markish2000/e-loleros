const verifyToken = require('../../helpers/token/verifyToken');

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();
    console.log(req.headers.authorization, 'token');
    if (token === 'Bearer') {
      return res.status(404).json({
        error: 'No se ha enviado un token y el mismo es obligatorio.',
      });
    }

    const tokenData = await verifyToken(token);

    if (!tokenData) {
      return res.status(404).json({ error: 'El token no es válido.' });
    }
    next();
  } catch (error) {
    return res.status(400).json({ error: 'Hubo un problema con el token.' });
  }
};

module.exports = validateToken;
