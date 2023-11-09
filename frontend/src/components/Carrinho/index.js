import './carrinho.css'
import '../Header/header.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';

export default function Carrinho() {
  const [produtos, setProdutos] = useState([])
  useEffect(() => {
    const minhaLista = localStorage.getItem('@produtocarrinho')
    setProdutos(JSON.parse(minhaLista) || [])
  }, [])

  function excluirProduto(id) {
    let filtroProdutos = produtos.filter((item) => {
      return (item.id !== id)
    })
    setProdutos(filtroProdutos)
    localStorage.setItem('@produtocarrinho', JSON.stringify(filtroProdutos))

  }

  return (
    <Container fluid>
      <div className='cabecalho'>
        <h1>CARRINHO DE COMPRAS</h1></div>
      <div>
        {produtos.map((produtos) => {
          return (
            <div>
              <li key={produtos.id}>
              </li>
            </div>
            
          )
        })}



        
      </div>
    </Container>
  )
}