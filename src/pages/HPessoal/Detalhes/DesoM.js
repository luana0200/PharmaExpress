import deso from '../imagens H/deso M.webp'
import './HP.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function DesoM() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={deso} alt="deso M" />
                <h4>
                    Desodorante Rexona Masc 200 ml</h4> <br />
                Indicado para todos os tipos de pele.
                Protege 3 vezes mais do que os antitranspirantes comuns.
                Controla o suor excessivo e previne o mau odor por 96 horas.
                Proporciona frescor, conforto e segurança.
                <h1>R$ 16,99</h1>
                <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}