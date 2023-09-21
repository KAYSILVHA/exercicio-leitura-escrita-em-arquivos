const express = require('express');
const {listarTodos, registrarvenda} = require('../controladores/produtos')
const roteador = express();


roteador.get('/produtos', listarTodos)
roteador.post('/produtos', registrarvenda)

module.exports = roteador