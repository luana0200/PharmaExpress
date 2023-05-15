import perfume3 from '../imagens/perfume3.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/esm/Badge'

export default function Perfume() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={perfume3} alt="Perfume3" />
            <h4>La Victorie Eau de Parfum 75ml</h4>

            La Victorie Intense Eau de Parfum é a nova fragrância de Eudora, que apresenta um novo floral amadeirado cremoso, 
            intenso e sofisticado. La Victorie Intense traz a explosão de felicidade da pimenta rosa, a intensidade da tuberosa 
            e a sofisticação das madeiras quentes. Uma combinação explosiva que reflete a felicidade de viver intensamente cada momento.
            A tuberosa, sofisticada flor de contrastes e singularidades, exala feminilidade durante o dia e ao entardecer, desvenda uma fragrância intensa e inebriante floral.
            Viva intensamente a felicidade de cada momento com La Victorie Intense.
            <div className='promocao'>
            <Badge bg="danger">PROMOÇAO 10%</Badge>
                    </div>
            <h1>
                R$ 188,99
            </h1> <br />

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}










