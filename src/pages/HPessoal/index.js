import './estilo.css'
import { Link } from 'react-router-dom'
import '../../../src/components/Rodape/rodape.css'

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
import protetor from "./imagens H/protetor.webp"
import escovacarvao from "./imagens H/escova colgate carvao.jpg"
import listerine from "./imagens H/listerine.webp"
import escova from './imagens H/escova de dente.webp'
import sabonetedove from "./imagens H/sabonete dove.jpg"
import sabonete from "./imagens H/sabonete protex.webp"
import saboneteliq from "./imagens H/sabonete liq.png"


import visa12 from '../../components/Header/imagens/visa12.png'

export default function HPessoal() {

    return (
        <Container fluid>
             <div className='cabecalho'><h1>HIGIENE PESSOAL</h1></div>
             <Row  className='d-flex justify-content-center'>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={desoF} alt="desodorante" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Desodorante Rexona Fem 200 ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/DesoF'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={deso} alt="deso M" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2> Desodorante Rexona Masc 200 ml </h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/DesoM'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={shampoo} alt="shampoo" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Shampoo Pantene 470 ml</h2></Card.Title>
                        <br />
                        <div className='Container llog'>
                            <Link to='/Shampoo'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={condicionador} alt="condicionador" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Condicionador Pantene 400 ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Condicionador'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={pasta} alt="pasta" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Pasta de Dente Colgate 90 g</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Pasta de Dente'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={pastadental} alt="pasta dental" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Pasta de Dente Oral-Bg</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/PastaDental'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={absorvente} alt="absorvente" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Absorvente 32 unidades</h2></Card.Title>  <br />
                        <div className='Container Container llog'>
                            <Link to='/Absorvente'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={creme} alt="creme" />
                    <br />
                    <Card.Body>  <br />
                        <Card.Title><h2>Creme Facial 100 g </h2></Card.Title>  <br />
                        <div className='Container Container llog'>
                            <Link to='/CremeFacial'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={protetor} alt="absorvente" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Protetor Solar Nivea 200 ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Protetor'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={sabonetedove} alt="sabonete dove" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Sabonete Dove 87 g</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/SaboneteDove'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={saboneteliq} alt="sabonete liq" />
                    <br />
                    <Card.Body>
                        <Card.Title><h2>Sabonete Liquido Luz 200ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Saboneteliq'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={sabonete} alt="sabonete" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Sabonete Protex em Barra 87 g</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/SaboneteProtex'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={listerine} alt="listerine" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Listerine 700 ml</h2></Card.Title>  <br />
                        <div className='Container llog'>
                            <Link to='/Listerine'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={escovacarvao} alt="escova de dente" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Escova Dental Colgate 4 unidade</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/EscovaColgate'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>


                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={escova} alt="escova de dente" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Escova Dental  2 unidade </h2></Card.Title>  <br />
                        <div className='Container llog'>
                            <Link to='/EscovaDental'><Button variant="secondary">Detalhes</Button></Link>
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