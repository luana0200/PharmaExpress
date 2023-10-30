import doricin from '../imagens/doricin.png'
import './medica.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Doricin() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={doricin} alt="Doricin" />
            <h4>Doricin Dipirona Monohidratada 300mg + Citrato De Orfenadrina 35mg + Cafeína 50mg 36 Comprimidos Ems</h4><br />
            
            Doricin é indicado no alívio da dor associada a contraturas musculares, incluindo dor de cabeça tensional.
            <h1>
                R$ 13,29
            </h1> <br />

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}