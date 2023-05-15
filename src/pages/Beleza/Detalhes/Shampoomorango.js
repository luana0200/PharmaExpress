import shampoomorango from '../imagens/shampoomorango2.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/esm/Badge'

export default function Shampoo() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={shampoomorango} alt="Shampoomorango" />
            <h4>Combo Frutas Vermelhas</h4>

            A escolha ideal para quem quer fios hidratados, robustos e extremamente protegidos. O Combo
            Instance Frutas Vermelhas Shampoo + Condicionador é perfeito para cabelos sensibilizados.
            Instance não possui Parabenos, Sal ou Petrolatos em sua fórmula, o que garante fios cheios de
            viço. Afinal, você merece esse carinho especial. Experimente a potência do extrato natural e do
            marcante aroma de Frutas Vermelhas.
            Este combo contém:
            01 Shampoo Instance Frutas Vermelhas, 300 ml
            01 Condicionador Instance Frutas Vermelhas, 300 ml.
            <br />
            <div className='promocao'>
            <Badge bg="danger">PROMOÇAO 10%</Badge>
                    </div>
            <h1>
                R$ 47,68
            </h1> <br />
     
            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}