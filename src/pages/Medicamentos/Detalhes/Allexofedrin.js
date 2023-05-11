import { Link } from 'react-router-dom'
import './medica.css'
import allexofedrin from '../imagens/allexofedrin.png'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Allexofedrin() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={allexofedrin} alt="Allexofedrin" />
            <h4>Allexofedrin Cloridrato De Fexofenadina 120mg 10 Comprimidos</h4><br />

            Está indicado para o alívio das manifestações alérgicas, tais como: rinite
            alérgica incluindo espirros e obstrução nasal (nariz entupido); prurido (coceira)
            no nariz, no palato (céu da boca), na garganta e nos olhos; coriza (nariz
            escorrendo); conjuntivite alérgica com sintomas de lacrimejamento e
            alergias da pele como os da urticária (erupções avermelhadas na pele que causam coceira).
            Se persistirem os sintomas, o médico deverá ser consultado.
            Allexofedrin 120mg é um medicamento. Seu uso pode trazer riscos.
            Procure o médico e o farmacêutico. Leia a bula.
            <h1>
                R$ 33,99
            </h1> <br />

            <div className='Container llog'>
            <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}