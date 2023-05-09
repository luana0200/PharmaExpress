import './bela.css'
import protetorsolar from '../imagens/protetorsolar.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Perfume() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={protetorsolar} alt="ProtetorSolar" />
            <h4>Protetor Solar Facial FPS 50 50g</h4>

            - Hidrata profundamente;
            - Minimiza os danos causados na pele pelos raios infravermelho;
            - Previne o envelhecimento precoce;
            - Ômega 3 e 6 para efeito antipoluição que protege das agressões externas;
            - Reforça a barreira natural da pele.
            <h1>
                R$ 84,99
            </h1> <br />
            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}