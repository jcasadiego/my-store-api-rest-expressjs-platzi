const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    'categoria 1',
    'caegoria 2'
  ]);
})

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
})

module.exports = router;
