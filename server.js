//Para crear el server
const express = require('express');
const app = express();
const server = require('http').Server(app);
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./db');
const config = require('./config/config');
const router = require('./network/routes');
const response = require('./network/response');

const usuarioController = require('./components/usuarios/controller')
const usuario = require('./components/usuarios/model');
//db();

//Añadimos el bodyparser
app.set('llave', config.llave);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Añadimos router a express
//app.use(router);
console.log('va a arrancar')
router(app);

//Servimos archivos estáticos
app.use('/app', express.static('src'))
server.listen(3000, function () {
    console.log('La aplicación está escuchando en http://localhost:3000');
});
