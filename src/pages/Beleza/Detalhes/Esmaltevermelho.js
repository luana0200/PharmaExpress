import './bela.css'
import esmaltevermelho from '../imagens/esmaltevermelho.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/esm/Badge'

export default function EsmalteVermelho() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={esmaltevermelho} alt="EsmalteVermelho" />
                <h4>Esmalte Glam Vermelho7ml</h4>

                Esmalte Glam de Eudora possui pigmentos que promovem alta intensidade de cor e brilho.
                Sua fórmula 9 free, hipoalergênica, possui longa duração e ultracobertura, é resistente a lascas, não forma bolinhas e não amassa.O excepcional pincel Big Brush com suas 500 cerdas possui formato anatômico que facilita a aplicação, promovendo a esmaltação mais rápida,
                sem falhas e proporcionando máxima cobertura.
                <div className='promocao'>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                </div>
                <h1>
                    R$ 14,99
                </h1> <br />
                <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}