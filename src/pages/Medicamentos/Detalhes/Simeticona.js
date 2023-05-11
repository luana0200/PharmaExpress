import { Link } from 'react-router-dom'
import './medica.css'
import simeticona from '../imagens/simeticona.jpg'


import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function Simeticona() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={simeticona} alt="Simeticona" />
            <h4>Simeticona Sabor Morango Gotas 15ml Ems Genérico</h4><br />

            A Simeticona é indicada para pacientes com excesso de gases no aparelho digestivo.
            O acúmulo de gases no estômago e no intestino chama-se flatulência,
            ue causa desconforto abdominal, aumento de volume abdominal, dor ou cólicas no abdômen.
            Se persistirem os sintomas, o médico deverá ser consultado.
            Simeticona é um medicamento. Seu uso pode trazer riscos. Procure o médico e o farmacêutico.
            Ou em caso de doença grave do fígado. Medicamentos podem causar efeitos indesejados.
            Evite a automedicação: informe-se com o farmacêutico.
            <h1>
                R$ 9,19
            </h1> <br />

            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}