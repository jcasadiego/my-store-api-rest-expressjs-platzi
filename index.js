const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/products', (req, res) => {
  res.json({
    name:'Producto 1',
    price: 1000
  });
})

app.get('/home', (req, res) => {
  res.send('Este es mi Home');
})

app.get('/categories', (req, res) => {
  res.json([
    'categoria 1',
    'caegoria 2'
  ]);
})

app.listen(port, () => {
  console.log('Mi port: ' + port);
})
