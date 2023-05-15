import delineador from '../imagens/delineador.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Batom() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={delineador} alt="Delineador" />
                <h4>Deliniador Líquido Para Olhos Preto Essencial  2,5ml</h4>

                Delineador Líquido Para Olhos Soul oferece alta pigmentação por até 10 horas.
                Ele desliza facilmente, seca super rápido e não migra para outras áreas dos olhos.
                Além disso, é fácil de ser removido.
                Seu aplicador proporciona traçado firme, preciso e de fácil aplicação.
                <h1>
                    R$ 35,99
                </h1>
                <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}





