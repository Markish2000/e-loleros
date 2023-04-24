const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'eLoleros API', version: '1.0.0' },
  },
  apis: ['./src/routes/products/index.js', './src/libs/database/index.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(
    `📘 Documentación versión 1 disponible en http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };
