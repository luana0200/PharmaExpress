import './HP.css'
import condicionado from '../imagens H/Condicionador.webp'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Condicionador() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={condicionado} alt="Condicionador" />


            <h4> Condicionador Pantene 400ml </h4><br />
            As ampolas da Pantene possuem tecnologias inteligentes para ajudar a identificar áreas
            danificadas do cabelo e hidratar,reconstruir ou nutrir.
            Agora você pode adicionar esses tratamentos ao seu cronograma capilar,
            até que seus cabelos alcancem a aparência e textura ideais.

            <h2>
                R$ 27,90
            </h2>
            
            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}