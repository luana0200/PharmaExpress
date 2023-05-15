import gelsecativo from '../imagens/gelsecativo.png'
import './bela.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Gelsecativo() {
    return (

        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top"  src={gelsecativo} alt="Gelsecativo" />
            <h4>Gel Secativo Pele com AcneAção Rápida 15g</h4>

            Você tem espinhas que insistem em permanecer em seu rosto?O Gel Secativo Pele com Acne Ação Rápida 
            Neo Essens de Eudora, vai te ajudar.​Benefícios:Atua na remoção da acne;Reduz a oleosidade;Uniformiza o tom da pele.

            <h1>
                R$ 32,99
            </h1> <br />
            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}