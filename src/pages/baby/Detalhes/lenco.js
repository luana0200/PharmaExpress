import './baby.css'
import lenco from '../imagens/Lenco umidecido.png' 
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Lenco() {
    return (

        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={lenco} alt="lenco"  />
             <h4>Lenço umedecido Johnson's Baby </h4><br />
                    As Toalhinhas Umedecidas Johnson's Baby Extra Cuidado possuem a exclusiva essência Natural Calm que libera um 
                    cheirinho suave e proporciona uma agradável sensação de relaxamento, com propriedades suavizantes, além de contar
                     com a inovadora fórmula Chega de Lágrimas, permitindo o uso inclusive no rosto, sem arder os olhos. Com essência 
                     exclusiva Natural Calm e fórmula Chega de Lágrimas, possuem propriedades relaxantes e suavizantes. 
                     Dermatologicamente testada e hipoalergênica.
             <br/>
            <h1>
                R$ 19,90
            </h1>
            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRA</Button></Link>
                </div>
                </Card>
        </Container>
    )
}

