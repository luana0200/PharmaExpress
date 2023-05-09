import './baby.css'
import kit from '../imagens/Kit Escova Azul.jpg'
import { Link } from 'react-router-dom'


import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function kitAzul() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={kit} alt="Kit Azul" />
                <h4> Kit Escova Azul 2 peças</h4>
                <br />
                Kit de escova e pente na cor azul  2 peças, sendo: 1 escova com cerdas macias, 1 pente.
                Material: Polipropileno - Nylon - Arame - Pigmento
                <h1>
                    R$ 7,99
                </h1>
                <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRA</Button></Link>
                </div>
            </Card>
        </Container>
    )
}