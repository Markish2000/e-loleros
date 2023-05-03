const jwt = require('jsonwebtoken');
require('dotenv').config();
const { JWT_SECRET } = process.env;

const generateToken = ({
  nickName,
  email,
  firstName,
  lastName,
  dateOfBirth,
  genre,
  nationality,
  image,
  role,
}) => {
  return jwt.sign(
    {
      nickName,
      email,
      firstName,
      lastName,
      dateOfBirth,
      genre,
      nationality,
      image,
      role,
    },
    JWT_SECRET,
    {
      expiresIn: '2h',
    }
  );
};

module.exports = generateToken;
