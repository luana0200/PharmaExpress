import './HP.css'
import pastadental from '../imagens H/pasta dental.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function PastaDental(){
    return(
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"s src={pastadental} alt="pasta dental" />


            <h4> Pasta de Dente Oral-b </h4><br/>

            A nova pasta dental Oral-B 100% protege contra os problemas mais comuns: Placa, Bactéria, Hálito, Tártaro, Cáries,
            Branqueamento, Gengiva e Esmalte.

            <h1> R$ 5,69 </h1>
            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
                </div>
            </Card>
        </Container>
    )
}