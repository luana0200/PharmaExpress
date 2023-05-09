import { Link } from 'react-router-dom'
import './medica.css'
import paracetamol from '../imagens/paracetamol.png'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Paracetamol() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={paracetamol} alt="paracetamol" />
            <h4>Paracetamol 750mg 20 Comprimidos Ems Genérico</h4><br />

            O Paracetamol é indicado em adultos para a redução da febre e para o alívio
            temporário de dores leves a moderadas, tais como: dores associadas a
            dores musculares, dores leves associadas a artrites e cólicas menstruais.
            Se persistirem os sintomas, o médico deverá ser consultado.
            Não use junto com outros medicamentos que contenham paracetamol, com álcool,
            Ou em caso de doença grave do fígado. Medicamentos podem causar efeitos indesejados.
            Evite a automedicação: informe-se com o farmacêutico.
            <h1>
                R$ 25,38
            </h1> <br />

            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
                </div>
            </Card>
        </Container>
    )
}