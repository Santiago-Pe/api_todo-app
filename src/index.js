// Codigo del servidor

const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

app.listen(port, console.log('el servidor esta escuchando en la puerta', port))