import sominex from '../imagens/sominex.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function Sominex() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={sominex} alt="Sominex" />
            <h4>Sominex Composto 20 Comprimidos Ansiedade E Insônia Ems</h4><br />

            Sominex Composto é um fitoterápico que auxilia nos sintomas de insônia e ansiedade, favorecendo a qualidade do sono.
            Se persistirem os sintomas, o médico deverá ser consultado.
            Evite a automedicação: informe-se com o farmacêutico.

            <h1>
                R$ 27,90
            </h1> <br />

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}