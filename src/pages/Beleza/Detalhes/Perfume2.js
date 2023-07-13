import perfume2 from '../imagens/perfume2.png'
import './bela.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/esm/Badge'

export default function Perfume() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={perfume2} alt="Perfume2" />
                <h4>Perfume Colônia  Masculino Pulse 100ml</h4>

                Fragrância amadeirado aromático, almíscar, âmbar, sândalo, vetiver des sables. Corpo com especiaria picante, 
                pimenta preta, ilangue-ilangue. Principais de cardamomo, limão, maçã. Perfume livre de crueldade animal.
                <div className='promocao'>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                </div>
                <h1>
                    R$ 80,99
                </h1> <br />

                <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}










