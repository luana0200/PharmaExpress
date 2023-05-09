import './HP.css'
import pasta from '../imagens H/pasta de dente C.jpeg'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function PastaDente(){
    return(
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={pasta} alt="pasta" />

            <h4> Pasta de Dente Colgate 90 g </h4><br/>
            O que acontece é que a limpeza remove placas bacterianas, tártaro e algumas manchas que ofuscam o brilho natural de seus dentes.
            Após a limpeza, você percebe, sim, seus dentes mais claros, mas não tão brancos como após um clareamento dental.

            <h1> R$ 13,90 </h1>
            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}