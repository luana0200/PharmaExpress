// import '../../../components/Header/header.css'
import './baby.css'
import { Link } from 'react-router-dom'
import aptamil from '../imagens/Formula Aptamil.webp'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Aptamil() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={aptamil} alt="Aptamil" />
                <h4 >Formula Aptamil 1800 g</h4><br />
                Aptamil Premium 1 é uma fórmula infantil de partida, indicada para alimentação de bebês
                lactentes desde o nascimento até o 6º mês de vida, adicionada de prebióticos.
                O produto contém proteínas lácteas, ácidos graxos poli-insaturados de cadeia longa (DHA e ARA), prebióticos, nucleotídeos e taurina.
                <br />
                <h1>
                    R$ 49,90
                </h1>
                <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
                </div>
            </Card>
        </Container>
    )
}