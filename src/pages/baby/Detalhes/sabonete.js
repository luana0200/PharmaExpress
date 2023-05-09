import './baby.css'
import { Link } from 'react-router-dom'
import Sabonete from '../imagens/sbonete barra.webp'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Baseultra() {
   return (
      <Container >
         <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={Sabonete} alt="sabonete" />
            <h4>Sabonete em Barra Johnson 80g</h4><br />
            
            O Sabonete JOHNSON'S® em Barra Original é enriquecido com hidratante que evita o ressecamento e
            é suave e delicado o suficiente para ser usado no corpo e rosto do bebê.

            <h1>
               R$ 6,99
            </h1>
            <div className='Container llog'>
               <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
            </div>
         </Card>
      </Container >
   )
}