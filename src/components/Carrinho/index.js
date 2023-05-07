import './carrinho.css'
import '../Header/header.css'
import manutencao from "./imagens/manutencao.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Carrinho() {
    return (
      <div className='car'>
         <Container>
           <Row md= {1}>
           
          <h2>Carrinho de Compras</h2>
          <img src={manutencao} alt="Manutencao" />
          </Row>
            </Container>
          </div>
          )

}