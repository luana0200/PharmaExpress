import Perfume4 from '../imagens/perfume4.png'
import './bela.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Perfume() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={Perfume4} alt="Perfume4" />
                <h4>Magnific Audaz Eau de Parfum 75ml</h4>

                Eudora Magnific Audaz Eau de Parfum é um tributo à coragem e audácia das mulheres magníficas, que conquistam
                o seu espaço no mundo todos os dias. Inspirada na força e audácia de toda mulher, traz a literalidade das flores
                mais emblemáticas da perfumaria. Combinando essa força com feminilidade, resulta em mais uma fragrância floral
                marcante e opulenta da marca Magnific. O seu segredo Eudora é o Jasmim do Egito, uma das flores do exclusivo acorde Flores Magníficas.

                <h1>
                    R$ 179,99
                </h1> <br />

                <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}
