import './bela.css'
import shampookarite from '../imagens/shampookarite2.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Shampoo() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={shampookarite} alt="Shampookarite" />
            <h4>Combo Karité</h4>
            Sabemos que o cabelo é nosso cartão-postal. Por isso, nada mais essencial do que o momento
            de cuidar dos fios. Combo Instance Karité vem com o shampoo e condicionador da linha,
            proporcionando limpeza e maciez.
            crescimento e fortalecimento do fio, evitando quebra. Entregando cabelos mais fortes e macios,
            com um crescimento natural e mega saudável.
            Este combo contém:
            01 Shampoo Instance Karité, 300 ml
            01 Condicionador Instance Karité, 300 ml
            <h1>
                R$ 52,98
            </h1> <br />

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}