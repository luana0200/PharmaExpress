import condres from '../imagens/condres.png'
import './medica.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Condres() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={condres} alt="Condres" />
            <h4>Condres Colágeno 90 cápsulas EMS</h4><br />
            Condres colágeno não hidrolisado
            Tipo ii - 90 cápsulas
            Colágeno tipo ii não hidrolisado em cápsulas.
            Uso adulto.
            Zero açúcar e zero glúten
            Se persistirem os sintomas, o médico deverá ser consultado.
            <h1>
                R$ 211,52
            </h1>

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}
