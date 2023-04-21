const { Router } = require('express');
const ProductsService = require('../services/products.service');
const router = Router();
const service = new ProductsService();
router.get('/', async (req, res) => {
  try {
    const response = await service.find();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
