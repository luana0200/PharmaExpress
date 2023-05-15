import saboneteliq from '../imagens H/sabonete liq.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/esm/Badge'

export default function SaboneteLiq() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={saboneteliq} alt="sabonete liq" />
            <h4> Sabonete Liquido Lux 200ml</h4><br />
            O Sabonete Lux Botanicals hidrata profundamente, deixando a pele bonita,
            radiante e suavemente perfumada. Sua fórmula com Óleo Hidrafloral proporciona uma pele protegida do ressecamento
            e danos do dia- a-dia, deixando uma leve fragrância em sua pele. Explosão de fragrâncias inspiradas na natureza.
            <div className='promocao'>
            <Badge bg="danger">PROMOÇAO 10%</Badge>
                    </div>
            <h1>R$7,64</h1>

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}