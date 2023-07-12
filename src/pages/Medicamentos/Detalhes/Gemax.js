import gemax from '../imagens/gemax.png'
import './medica.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Gelmax() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={gemax} alt="gemax" />
            <h4>Gelmax Sabor Limão Ems</h4><br />
            Gelmax Suspensão 240ml é um medicamento que combate sintomas de dor,
            azia e má digestão de problemas gastrintestinais
            Procure um médico ou um farmacêutico. Leia a bula.
            Medicamentos podem causar efeitos indesejados. Evite a automedicação: informe-se com o farmacêutico.
            <h1>
                R$ 15,88
            </h1> <br />

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}