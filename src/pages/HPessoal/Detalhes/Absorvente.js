import absorvente from '../imagens H/absorvente.webp'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function Absorvente() {
    return (

        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top"src={absorvente} alt="absorvente" />
            <h4> Absorvente 32 unidades   </h4> <br />

            Se o seu fluxo é intenso e você está sempre com medo de vazamentos, o absorvente Intimus® Noturno cobertura Seca é simplesmente perfeito.
            Além de ter uma alta absorção, ele é um pouco mais longo, garantindo a segurança a noite toda.

            <h1>R$ 27,50</h1>
           
            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}


