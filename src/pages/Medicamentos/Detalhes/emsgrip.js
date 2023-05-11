import { Link } from 'react-router-dom'
import './medica.css'
import emsgrip from '../imagens/emsgrip.png'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Emsgrip() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={emsgrip} alt="Emsgrip" />
            <h4>EMSGRIP Limão e Mel Sachê EMS</h4>

            EMSGrip Limão e Mel Sachê EMS (paracetamol) é utilizado para alívio temporário da dor de cabeça, febre e dores no corpo
            associados a gripe. Sua ação inicia-se de 15 a 30 minutos após administração oral e perdura por um período de 4 a 6 horas.
            Uso adulto e pediátrico acima de 12 anos.
            <h1>
                R$ 10,00
            </h1> <br />
            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}