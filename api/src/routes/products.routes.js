const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
  try {
    res.json('hola');
  } catch (error) {}
});
