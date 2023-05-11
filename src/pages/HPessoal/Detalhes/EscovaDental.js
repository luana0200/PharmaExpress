import './HP.css'
import escova from '../imagens H/escova de dente.webp'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function EscovaDental() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={escova} alt="escova de dente" />
                <h4> Escova Dental 2 unidades </h4>
                Ajuda na remoção de manchas.
                Deixa os dentes mais brancos.
                Remove as bactérias causadoras do mau hálito.
                Limpa a placa bacteriana nos dentes posteriores.
                Cerdas de borracha que aderem ao creme dental.

                <h1>  R$ 13,50 </h1>
                <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}