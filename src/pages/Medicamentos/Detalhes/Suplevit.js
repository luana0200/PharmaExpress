import { Link } from 'react-router-dom'
import './medica.css'

import suplevit from '../imagens/suplevit.png'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Suplevit() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={suplevit} alt="Suplevit" />
            <h4>Suplevit Cabelos E Unhas Com 30 Cápsulas Ems</h4><br />

            É um suplemento alimentar enriquecido com vitaminas
            e minerais essenciais para a saúde feminina, contribuindo para
            a manutenção da pele, unha, cabelos e da saúde como um todo.
            <h1>
                R$ 25,90
            </h1> <br />
            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}