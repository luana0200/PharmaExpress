import ambroxol from '../imagens/ambroxol.png'
import './medica.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Ambroxol() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <div className='remedio'>
                    <Card.Img className='detail' variant="top" src={ambroxol} alt="Ambroxol" />
                </div>
                <h4>Cloridrato De Ambroxol 30mg/5ml Xarope 120ml Ems Genérico</h4><br />

                Este medicamento é indicado para o tratamento das doenças
                broncopulmonares (brônquios e pulmões) agudas e crônicas para facilitar a
                expectoração (soltar o catarro do peito) quando houver acúmulo de secreção.
                Cloridrato de ambroxol é um medicamento. Seu uso pode trazer
                Riscos. Procure um médico ou um farmacêutico. Leia a bula. Não
                Use este medicamento em crianças menores de dois anos de idade.
                <h1>
                    R$ 15,69
                </h1>
                <div className='Container button'>
            <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}