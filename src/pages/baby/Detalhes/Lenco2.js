import { Link } from 'react-router-dom'
import Lenco2 from '../imagens/lenco humidecido.png'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Lenco() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={Lenco2} alt="Lenco" />
                <h4>Lenço Umidecido  Pampers 48 unidade</h4><br />
                Outra ótima opção para as peles delicadas dos recém-nascidos é o Lenço Umedecido Recém Nascido sem Fragrância da Johnson's,
                que é hipoalergênico,
                sem fragrância e sem parabenos e álcool, tornando-se um dos mais recomendados para uso desde os primeiros dias de vida.


                <h1>
                    R$ 29,90
                </h1>
                <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRA</Button></Link>
                </div>
            </Card>
        </Container>
    )
}