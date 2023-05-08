import './baby.css'
import { Link } from 'react-router-dom'
import chupetas from '../imagens/Chupetas.png'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Chupetas() {
    return (
        <Container >

            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={chupetas} alt="Chupetas" />
                <h4>Chupetas</h4><br />
                <h1>
                    R$ 9,90
                </h1>
                <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
                </div>
            </Card>
        </Container>
    )
}