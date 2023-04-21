const { Router } = require('express');
const router = Router();

const productsRoutes = require('./products.routes');

function routesApi(app) {
  app.use('/api/v1', router);
  router.use('/users', productsRoutes);
}

module.exports = routesApi;
