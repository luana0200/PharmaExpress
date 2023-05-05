import './carrinho.css'
import '../Header/header.css'
import manutencao from "./imagens/manutencao.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
    return (
        <Container>
          <Row md= {4}>
           
          <h2>Carrinho</h2>
          <Col><img src={manutencao} alt="Manutencao" /></Col>
          </Row>
            </Container>
          )
}