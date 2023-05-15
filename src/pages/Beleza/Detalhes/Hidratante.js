import hidratante from '../imagens/Hidratante2.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Hidratante() {
    return (

        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top"  src={hidratante} alt="Hidratante" />
            <h4>Loção Hidratante Desodorante Corporal Lyra 150ml</h4>

            Loção Hidratante Desodorante Corporal Lyra é como um valor de uma joia!
            Eudora se inspirou no mundo das joalherias para trazer em um frasco valioso uma fragrância exuberante,
            uma combinação única de frutas vermelhas e flores intensas com a cremosidade do musk e cedro.
            O Hidratante Desodorante Corporal Lyra proporciona hidratação por até 48 horas. Sua fórmula de rápida absorção deixa a pele macia,
            perfumada e protegida. Um verdadeiro ícone de brilho que desperta emoções e cria memórias preciosas.
            <h1>
                R$ 46,99
            </h1> <br />

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}