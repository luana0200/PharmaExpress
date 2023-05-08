import './HP.css'
import listerine from '../imagens H/listerine.webp'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Listerine(){
    return(
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={listerine} alt="listerine" />


            <h4> Listerine 500 ml </h4><br/>
            Fórmula exclusiva com agentes antibacterianos que eliminam até 99,9% dos germes que causam mau hálito, placa e gengivite. 
            Faça bochechos com 20 mL por 30 segundos 2x ao dia após escovação e uso de fio dental. NÃO DILUIR. 
            Manter fora do alcance de crianças.
            <h1> R$ 20,17 </h1>
            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
                </div>
            </Card>
        </Container>
    )
}