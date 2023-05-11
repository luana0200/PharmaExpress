import { Link } from 'react-router-dom'
import './medica.css'
import dipirona from '../imagens/dipirona.png'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function Dipirona() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={dipirona} alt="Dipirona" />
            <h4>Dipirona Sódica 500mg/ml Solução Gotas 10ml Ems Genérico Ems</h4><br />
            A Dipirona é indicada para combater a febre, baixar a temperatura do corpo e
            aliviar a dor.
            <h1>
                R$ 5,09
            </h1> <br />

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}