import './carrinho.css'
import '../Header/header.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container';

export default function Carrinho() {

  const navigation = useNavigate()

  useEffect(() => { }, [])
  
  return (
    <Container fluid>
      <div className='cabecalho'>
        <h1>CARRINHO DE COMPRAS</h1></div>


      <h1></h1>
    </Container>
  )
}