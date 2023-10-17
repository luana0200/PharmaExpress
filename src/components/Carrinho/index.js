import './carrinho.css'
import '../Header/header.css'
import { useState, useEffect } from 'react'
import apiBack from '../../services/apiBack'

import manutencao from "./imagens/manutencao.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Carrinho() {
  const [produtos, setProdutos] = useState([''])

  return (
    <Container fluid>
      <div className='cabecalho'>
        <h1>CARRINHO DE COMPRAS</h1></div>


      <article> {produtos.nome}  </article>

    </Container>
  )
}