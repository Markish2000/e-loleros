const { api, initialProduct } = require('./helpers');
// const Products = require('../libs/database/models/products/index');

// beforeEach(async () => {
//   await Products.deleteMany({});

//   const product1 = new Products(initialProduct[0]);
//   await product1.save();

//   const product2 = new Products(initialProduct[1]);
//   await product2.save();
// });

test('Los productos devuelven un JSON.', async () => {
  await api
    .get('/api/v1/products')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

// test('Devuelve todos los productos.', async () => {
//   const response = await api.get('/api/v1/products');
//   console.log(response.body.data);
//   expect(response.body.data).toHaveLength(5);
// });

// test('Crear un nuevo producto.', async () => {
//   const newProduct = {
//     title: 'Ahri Academia',
//     price: 3000,
//     category: 'Skins',
//     detail: 'La mejor skin de Ahri',
//     mainImage:
//       'https://pm1.narvii.com/5838/134bc080967fbd60f60797df55c624f570a7f7e5_00.jpg',
//     images: [
//       'https://cdnb.artstation.com/p/assets/images/images/001/633/557/large/alexandra-cvetkova-.jpg?1449832105',
//     ],
//     stock: 5,
//     availability: true,
//   };

//   await api
//     .post('/api/v1/products')
//     .send(newProduct)
//     .expect(200)
//     .expect('Content-Type', /application\/json/);

//   const response = await api.get('/api/v1/products');

//   const contents = response.body.map((product) => product.title);

//   expect(response.body).toHaveLength(initialProduct.length + 1);
//   expect(contents).toContain(newProduct.title);
// });
