import sabonetedove from '../imagens H/sabonete dove.jpg'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function SaboneteDove(){
    return(
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={sabonetedove} alt="sabonete dove" />

            <h4>Sabonete Dove 85 g</h4> <br />
                Dove não resseca a pele como sabonetes comuns.
                Tecnologia de limpeza e manutenção da hidratação com suavidade para sua pele.
                Deixa a pele macia, bem cuidada e com aspecto saudável.
                Pode ser usado diariamente no rosto, mãos e corpo.
            <h1>
                R$ 5,99
            </h1>
            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}