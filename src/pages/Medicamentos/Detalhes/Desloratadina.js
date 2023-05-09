import { Link } from 'react-router-dom'
import './medica.css'
import desloratadina from '../imagens/desloratadina.png'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Desloratadina() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={desloratadina} alt="Desloratadina" />
            <h4>Desloratadina 5mg 30 Comprimidos Ems Genérico</h4><br />

            Desloratadina é indicado para o alívio rápido dos sintomas associados à rinite alérgica
            (incluindo rinite alérgica intermitente e persistente), entre eles: espirro; rinorreia; prurido e
            congestão nasal; prurido ocular, lacrimejamento e vermelhidão dos olhos; prurido do palato e tosse.
            Desloratadina 5mg é um medicamento. Seu uso pode trazer
            Riscos. Procure um médico ou um farmacêutico. Leia a bula.
            Medicamentos podem causar efeitos indesejados. Evite a
            Automedicação: informe-se com o farmacêutico.
            <h1>
                R$ 65,50
            </h1> <br />

            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
                </div>
            </Card>
        </Container>
    )
}