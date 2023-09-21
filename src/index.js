const express = require('express')

const rotas = require('./roteadores/roteadores')

const app = express();

app.use(express.json());

app.use(rotas)

app.listen(3000, ()=>{
  console.log("Sua API está rodando na porta 3000")
})