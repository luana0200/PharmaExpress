import complexo from '../imagens/complexo.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function Complexo() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={complexo} alt="Complexo" />
            <h4>Complexo B Polivitamínico 100 Comprimidos Ems</h4><br />
            Complexo B® é indicado para o tratamento de carência múltipla de vitaminas
            do complexo B e suas manifestações. Tem ação reguladora das carências
            quando já existem manifestações clínicas causadas pela deficiência vitamínica.
            Se persistirem os sintomas o médico deverá ser consultado.
            Complexo b ems é um medicamento. Seu uso pode trazer riscos.
            Procure o médico e o farmacêutico. Leia a bula.
            <h1>
                R$ 24,90
            </h1> <br />

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}