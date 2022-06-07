const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/home', (req, res) => {
  res.send('Este es mi Home');
})

routerApi(app);

app.listen(port, () => {
  console.log('Mi port: ' + port);
})
