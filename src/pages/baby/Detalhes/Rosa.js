import './baby.css'
import { Link } from 'react-router-dom'
import rosa from '../imagens/EscovaRosa.jpg'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function MamadeiraRosa() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={rosa} alt="Rosa" />
                <h4> Kit Escova Rosa 2 peças</h4><br/>
                Kit de escova e pente na cor rosa  2 peças, sendo: 1 escova com cerdas macias, 1 pente.
                Material: Polipropileno - Nylon - Arame - Pigmento
                <h1>
                    R$ 7,99
                </h1>
                <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
                </div>
            </Card>
        </Container >
    )
}