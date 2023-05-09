import './baby.css'
import Mamadeira from '../imagens/Mamadeira Rosa.jpg'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function MamaRosa() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={Mamadeira} alt="Mamadeira" />
                <h4>Mamadeira Rosa 330ml</h4><br />
                1 Mamadeira Aquarela Big Rosa.
                Com esta mamadeira big, ele vai se acostumar a tomar seu leitinho, água e outros líquidos de maneira fácil, principalmente no processo de deixar o peito.
                Com capacidade para 330ml, ela vem com bico de silicone super macio, atóxico, antialérgico, esterilizável, inodoro, não mela e é resistente à fervura.
                <h1>
                    R$ 10,90
                </h1>
                <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRA</Button></Link>
                </div>
            </Card>
        </Container>
    )
}