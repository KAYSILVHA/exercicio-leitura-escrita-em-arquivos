const produtos = require('../produtos/produtosDisponiveis')
const fs = require('fs/promises')

const listarTodos = async (req, res)=>{
  return await res.status(200).json(produtos)
}

const registrarvenda = async (req, res)=>{
  const {produto_id, quantidade} = req.body
  const produto = produtos.find((produto)=>{
    return produto.id === Number(produto_id)
  })
  if(!produto){
    return res.status(404).json("Produto não encontrado")
  }

  try{
    const vendas = await fs.readFile('./src/vendas.json');
    const parseVendas = JSON.parse(vendas)
    parseVendas.vendas.push({
      produto,
      quantidade
    })

    await fs.writeFile('./src/vendas.json', JSON.stringify(parseVendas))
    return res.status(201).json("Venda registrada!")

  }catch (erro){
    return res.status(500).json("Erro do servidor")
  }



  
};

module.exports = {
  listarTodos,
  registrarvenda,
};