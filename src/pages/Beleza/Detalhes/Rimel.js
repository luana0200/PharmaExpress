import './bela.css'
import rimel from '../imagens/rimel.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/esm/Badge'

export default function Rimel() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={rimel} alt="Rimel" />
            <h4>Máscara Para Cílios Super Up 8mg</h4>

            Máscara Super Up Niina Secrets Eudora: 13x mais volume e curvatura nas alturas.
            Fórmula com fibras e exclusiva tecnologia Secrets, com óleo de rosas e vitaminas: nutre a pele, possui efeito antioxidante e auxilia na formação de colágeno.
            Benefícios:
            - Volume e curvatura nas alturas.
            - Pincel exclusivo Niina com fibras que preenchem por completo.
            - Tecnologia Secrets que nutre os fios.
            <div className='promocao'>
            <Badge bg="danger">PROMOÇAO 10%</Badge>
                    </div>
                    <br/>
            <h1>
                R$ 49,41
            </h1> <br />

         
            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}