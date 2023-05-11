
import './baby.css'
import Sabao from '../imagens/Sabonet Liquido.webp'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function kitAzul() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={Sabao} alt="Shampoo" />
                <h4>Sabonete Líquido JOHNSON'S 400ml</h4>
                <br />

                O Sabonete Líquido JOHNSON'S® de Glicerina possui uma fórmula com tecnologia micelar, que traz o equilíbrio ideal
                entre a suavidade que
                a pele do bebê precisa e a limpeza que você espera, protegendo a barreira natural da pele e evitando o ressecamento.
                <h1>
                    R$ 29,90
                </h1>
                <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRA</Button></Link>
                </div>
            </Card>
        </Container >
    )
}