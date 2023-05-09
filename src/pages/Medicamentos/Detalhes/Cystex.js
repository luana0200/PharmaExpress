import { Link } from 'react-router-dom'
import './medica.css'
import cystex from '../imagens/cystex.png'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Cystex() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={cystex} alt="Cystex" />
            <h4>Cystex Cloridrato De Acriflavina 15mg + Metenamina 250mg + Cloretode Metiltionínio 20mg + Atropabelladonna L. 15mg 24 Drágeasems</h4><br />
            Cystex é indicado como antisséptico das vias urinárias nos casos de disúria
            (dificuldade de urinar), dor, ardor e desconforto para urinar.
            <h1>
                R$ 42,59
            </h1> <br />

            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
                </div>
            </Card>
        </Container>
    )
}