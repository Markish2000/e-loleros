const jwt = require('jsonwebtoken');
require('dotenv').config();
const { JWT_SECRET } = process.env;

const generateToken = ({ nickName, name, lastName }) => {
  return jwt.sign(
    {
      nickName,
      name,
      lastName,
    },
    JWT_SECRET,
    {
      expiresIn: '2h',
    }
  );
};

module.exports = generateToken;
