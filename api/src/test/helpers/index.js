const supertest = require('supertest');
const app = require('../../../app');
const api = supertest(app);

const initialProduct = {
  title: 'Ahri Academia',
  price: 3000,
  category: 'Skins',
  detail: 'La mejor skin de Ahri',
  mainImage:
    'https://pm1.narvii.com/5838/134bc080967fbd60f60797df55c624f570a7f7e5_00.jpg',
  images: [
    'https://cdnb.artstation.com/p/assets/images/images/001/633/557/large/alexandra-cvetkova-.jpg?1449832105',
  ],
  stock: 5,
  availability: true,
};

module.exports = { api, initialProduct };
