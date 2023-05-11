import './baby.css'
import fralda from '../imagens/Fralda.webp'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Fralda() {
    return (

        <Container >
                   <Card className='m-2, p-2'>

                <Card.Img className='detail' variant="top" src={fralda} alt="Fralda" />
                <h4> Fralda Pampers 24 unidades</h4><br />
                Pampers Confort Sec é uma fralda descartável para proporcionar uma noite tranquila ao bebê. Ela contém canais de
                ar que permitem uma circulação livre do ar dentro
                da fralda, evitando que o bumbum do bebê fique abafado e deixando a pele arejada e sequinha durante a noite.
                <br />

                <h1>
                    R$ 31,90
                </h1>
                <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRA</Button></Link>
                </div>
            </Card>
        </Container>
    )
}