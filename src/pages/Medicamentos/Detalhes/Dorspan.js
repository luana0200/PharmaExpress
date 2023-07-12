import dorspan from '../imagens/dorspan.png'
import './medica.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function Dorspan() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={dorspan} alt="Dorspan" />
            <h4>Escopolamina + Dipirona - Dorspan Composto Gotas 20ml Ems</h4><br />
            
            Dorspan® Composto é indicado como analgésico e antiespasmódico, em estados
            espásticos dolorosos e cólicas do trato gastrintestinal, das vias biliares e urinárias, e do
            aparelho genital feminino; dismenorreia.
            <h1>
                R$ 16,09
            </h1> <br />

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}