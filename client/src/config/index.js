import axios from "axios";

const { PORT } = process.env

const instance = axios.create({
  baseURL: `http://localhost:${PORT}/api/v1`
})

export default instance;