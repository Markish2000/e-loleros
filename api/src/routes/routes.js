const { Router } = require('express');
const router = Router();
const productRoute = require('./products.routes');
const routesApi = (app) => {
  app.use('/api/v1', router);
  router.use('/products', productRoute);
};

module.exports = routesApi;
