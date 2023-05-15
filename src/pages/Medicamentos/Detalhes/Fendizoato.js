import fendizoato from '../imagens/fendizoato.png'
import './medica.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Fendizoato() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={fendizoato} alt="Fendizoato" />
            <h4>Fendizoato De Cloperastina 3,54mg/ml Xarope 120ml + Copo Do Sador Ems Genéricoems</h4><br />
            Fendizoato de cloperastina 3,54mg é um medicamento. Seu uso pode trazer riscos.
            Procure um médico ou um farmacêutico. Leia a bula..
            Medicamentos podem causar efeitos indesejados. Evite a automedicação: informe-se com o farmacêutico.
            <h1>
            R$ 17,00
            </h1> <br />

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}