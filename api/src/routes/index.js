const { Router } = require('express');
const router = Router();
const productRoute = require('./products');
const usersRoute = require('./users');
const championsRoute = require('./champions');

const routesApi = (app) => {
  app.use('/api/v1', router);

  router.use('/products', productRoute);
  router.use('/users', usersRoute);
  router.use('/champions', championsRoute);
};

module.exports = routesApi;
