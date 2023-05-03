// require('dotenv').config();
import axios from 'axios';

const { PORT_BACK } = process.env;

const instance = axios.create({
  baseURL: `http://localhost:3001/api/v1`,
});

export default instance;
