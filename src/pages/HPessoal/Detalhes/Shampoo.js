import './HP.css'
import shampoo from '../imagens H/shampoo.webp'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Shampoo() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={shampoo} alt="shampoo" />
            <h4> Shampoo Pantene 450 ml</h4><br />
                hidratar e fortalecer os fios instantaneamente, sem comprometer os resultados dos tratamentos realizados. 
                É ideal para cabelos que passaram por tratamentos químicos que causam danos à estrutura protetora do cabelo,
                como ressecamento e quebra. Possui uma fórmula avançada com Pro-Vitaminas que ajudam a reparar,

            <h1>
                R$ 21,99
            </h1>
            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}