// index.js
const express = require('express');
const app = express();
const port = 4000;
const router = require('./router');
const dotenv = require('dotenv');

dotenv.config();



app.use(express.json());
app.use('/api', router);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});