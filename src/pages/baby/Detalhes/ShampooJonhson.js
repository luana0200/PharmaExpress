import { Link } from 'react-router-dom'
import ShampooJonhson from '../imagens/ShampooJonhson.webp'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function kitAzul() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={ShampooJonhson} alt="Shampoo" />
                <h4> Johnson's Baby 400ml</h4>
                <br />
                Johnson's Baby ajuda a realçar a beleza dos cabelos claros, além de limpar suavemente,
                sem agredir o couro cabeludo do bebê.

                <h1>
                    R$ 49,90
                </h1>
                <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRA</Button></Link>
                </div>
            </Card>
        </Container >
    )
}