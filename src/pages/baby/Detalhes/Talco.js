import './baby.css'
import talco from '../imagens/Talco.jpg'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Baseultra() {
   return (
      <Container >
         <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={talco} alt="talco" />
            <h4> Talco</h4><br />
            O Talco JOHNSON'S® Baby Pura Proteção foi desenvolvido para deixar a pele macia e perfumada com a fragrância que é sinônimo de “cheirinho de bebê”. Absorve o excesso de umidade da pele,
            deixando o seu bebê sequinho e confortável. Livre de corantes, parabenos e ftalatos. Testado por dermatologistas.

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