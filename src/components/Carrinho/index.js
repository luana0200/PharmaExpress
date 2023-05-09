import './carrinho.css'
import '../Header/header.css'
import manutencao from "./imagens/manutencao.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Carrinho() {
  return (
    <Container>
      <Row md={1}>
      <div className='carrinho'>
        <h2>Carrinho de Compras</h2></div>
        <img src={manutencao} alt="Manutencao" />
      </Row>
    </Container>
  )
}