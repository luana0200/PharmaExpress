import './baby.css'
import { Link } from 'react-router-dom'
  import Locao from '../imagens/Locao hidratante.jpg'

  import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

  export default function Baseultra(){
      return(
         <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top"src={Locao} alt="Locao" />
                      <h4>Loção Hidratante Johnson's Baby 200ml</h4><br/>
                      O Hidratante para Corpo e Rosto Recém-NascidoC é ideal para a hidratação da pele frágil do bebê. 
                      Sua fórmula é desenvolvida com algodão de verdade, nutrindo a pele do bebê desde 
                      o primeiro dia. Além disso, é hipoalergênico, livre de corantes, parabenos, sulfatos e ftalatos, e não deixa resíduos.
                   
                   
              <h1>
                 R$ 50,90
              </h1>
              <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRA</Button></Link>
                </div>
            </Card>
        </Container>
      )
  }