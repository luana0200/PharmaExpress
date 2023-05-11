import './HP.css'
import creme from '../imagens H/creme facial.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/esm/Badge'

export default function CremeFacial() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={creme} alt="creme" />

            <h4> Creme Facial 100 g </h4><br />
            O NIVEA Creme tem várias aplicações e benefícios: desde queimaduras,
            à hidratação de lábios até ao cuidar da pele irritada após depilação.
            E quando lhe faltar o after sun, experimente aplicar generosamente após um dia de sol na praia.
            <div className='promocao'>
            <Badge bg="danger">PROMOÇAO 10%</Badge>
                    </div>
            <h1>
                R$ 24,62
            </h1>
            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}