require('dotenv').config();
const Sequelize = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

/**
 * @openapi
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       properties:
 *         stock:
 *           type: number
 *           example: 5
 *         availability:
 *           type: boolean
 *           example: true
 *         id:
 *           type: number
 *           example: 1
 *         title:
 *           type: string
 *           example: Vayne Centinela
 *         price:
 *           type: number
 *           example: 2000
 *         detail:
 *           type: string
 *           example: La mejor skin de Vayne.
 *         mainImage:
 *           type: text
 *           example: https://pbs.twimg.com/media/E4fsUt1XIAMdm3o?format=jpg&name=4096x4096
 *         images:
 *           type: array
 *           items:
 *             type: text
 *           example: ["https://pbs.twimg.com/media/E4fsUt1XIAMdm3o?format=jpg&name=4096x4096", "https://cdn.bhdw.net/im/sentinel-vayne-league-of-legends-lol-wallpaper-95347_w635.webp"]
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 */
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
