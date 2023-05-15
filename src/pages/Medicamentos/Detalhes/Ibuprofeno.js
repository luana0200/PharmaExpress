import ibuprofeno from '../imagens/ibuprofeno.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function Ibuprofeno() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"ssrc={ibuprofeno} alt="ibuprofeno" />
            <h4>Ibuprofeno 200mg 20 Comprimidos Ems</h4><br />
            
            Ibuprofeno é um medicamento indicado para redução da febre e para o alívio de dores, tais como:
            dores decorrentes de gripes e resfriados, dor de garganta, dor de cabeça, dor de dente, dor nas costas,
            cólicas menstruais e dores musculares.
            Procure um médico ou um farmacêutico. Leia a bula.
            Medicamentos podem causar efeitos indesejados. Evite a automedicação: informe-se com o farmacêutico.
            <h1>
                R$ 12,58
            </h1> <br />

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}