import './carrinho.css'
import '../Header/header.css'

import manutencao from "./imagens/manutencao.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Carrinho() {
  return (
    <Container fluid>
      <div className='cabecalho'><h1>CARRINHO DE COMPRAS</h1></div>
      <Row md={1}>
        <img src={manutencao} alt="Manutencao" />
      </Row>
    </Container>
  )
}