import './baby.css'
import pomada from '../imagens/Pomada.webp'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Pomada() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={pomada} alt="pomada" />
                <h4> Pomada Hipogloss 45 g</h4>
                <br />
                Hipoglós é indicado para proteger a pele do bebê das assaduras. Sua composição com vitaminas A (retinol), D (colecalciferol) e óxido de
                zinco, entre outros componentes, forma uma camada de proteção
                contra as assaduras e irritações causadas principalmente pelo uso de fraldas e contato com as fezes, urina e suor.

                <h1>
                    R$ 39,90
                </h1>
                <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
                </div>
            </Card>
        </Container >
    )
}