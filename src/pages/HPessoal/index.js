import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'

import desoF from "./imagens H/desoF.webp"
import deso from "./imagens H/deso M.webp"
import shampoo from "./imagens H/shampoo.webp"
import condicionador from "./imagens H/Condicionador.webp"
import pasta from "./imagens H/pasta de dente C.jpeg"
import pastadental from "./imagens H/pasta dental.png"
import absorvente from "./imagens H/absorvente.webp"
import creme from "./imagens H/creme facial.png"
import protetor from "./imagens H/nivea.webp"
import sabonetedove from "./imagens H/sabonete dove.jpg"


import visa12 from '../../components/Header/imagens/visa12.png'

export default function HPessoal() {

    return (
        <Container fluid>
             <div className='cabecalho'><h1>HIGIENE PESSOAL</h1></div>
             <Row  className='d-flex justify-content-center'>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={desoF} alt="desodorante" />
                    <Card.Body>
                        <Card.Title><h2>Desodorante Rexona 200 ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/DesoF'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={deso} alt="deso M" />
                    <Card.Body>
                        <Card.Title><h2> Desodorante Rexona 200 ml </h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/DesoM'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={shampoo} alt="shampoo" />
                    <Card.Body>
                        <Card.Title><h2>Shampoo Pantene 470 ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Shampoo'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={condicionador} alt="condicionador" />
                    <Card.Body>
                        <Card.Title><h2>Condicionador Pantene 400 ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Condicionador'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

         

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={absorvente} alt="absorvente" />
                    <Card.Body>
                        <Card.Title><h2>Absorvente 32 unidades</h2></Card.Title> 
                        <div className='Container Container llog'>
                            <Link to='/Absorvente'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>


            

            </Row>
            <div className='fluid '>
                <img src={visa12} alt="creme" /><br/>
                <h7>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-170| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-6987 | SAC – Serviço de Atendimento ao Cliente: 6987-3217, Dúvidas, elogios e reclamações:
                    atendimento@pharmaexpress.com.br.</h7><br />
                <p> <h7>Política de privacidade | © 2023 RD. Todos os direitos reservados.</h7> </p>
            </div>
        </Container>
    )
}