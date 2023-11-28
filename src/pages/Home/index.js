import { Link } from 'react-router-dom'
import CarroselHome from '../../bootstrap/carroselHome.js'
import '../../components/Header/header.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'

import base from "../Beleza/imagens/base.png"
import batom from '../Beleza/imagens/batom.png'
// import shampoo from '../Beleza/imagens/shampoomorango2.png'
import rimel from '../Beleza/imagens/rimel.png'
import perfume1 from '../Beleza/imagens/perfume1.png'
// import Perfume2 from '../Beleza/imagens/perfume2.png'
import deso from '../HPessoal/imagens H/deso M.webp'
import creme from '../HPessoal/imagens H/creme facial.png'

import visa12 from '../../components/Header/imagens/visa12.png'

export default function Home() {
    return (
        <Container fluid>
            <br />
            <CarroselHome />
            <br />

            <Row className='d-flex justify-content-center'>

                <Card className='m-1' style={{ width: '20rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={base} />
                    <Card.Body>
                        <Card.Title><h2>Base Líquida Ultra Matte</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/BaseUltra'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '20rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={batom} />
                    <Card.Body>
                        <Card.Title><h2>Batom Líquido Matte Tint Rosé </h2></Card.Title>
                        <div className=' Container llog'>
                            <Link to='/Batom'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>



                <Card className='m-1' style={{ width: '20rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={rimel} />
                    <Card.Body>
                        <Card.Title><h2>Máscara Para Cílios Super Up</h2></Card.Title>
                        <div className=' Container llog'>
                            <Link to='/Rimel'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '20rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={perfume1} />
                    <Card.Body>
                        <Card.Title><h2>Desodorante Colônia 95ml</h2></Card.Title>
                        <div className=' Container llog'>
                            <Link to='/Perfume1'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>


                <Card className='m-1' style={{ width: '20rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={deso} alt="sabonete liq" />
                    <Card.Body>
                        <Card.Title><h2>Desodorante Rexona Masc 200 ml</h2></Card.Title>
                        <div className=' Container llog'>
                            <Link to='/Saboneteliq'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>



                <Card className='m-1' style={{ width: '20rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={creme} alt="creme" />
                    <Card.Body>
                        <Card.Title><h2>Creme Facial 100 g </h2></Card.Title>
                        <div className=' Container llog'>
                            <Link to='/CremeFacial'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
            </Row>


            <div className='fluid '>
                <img src={visa12} alt="creme" /><br />
                <h7>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-170| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-6987 | SAC – Serviço de Atendimento ao Cliente: 6987-3217, Dúvidas, elogios e reclamações:
                    atendimento@pharmaexpress.com.br.</h7><br />
                <p> <h7>Política de privacidade | © 2023 RD. Todos os direitos reservados.</h7> </p>
            </div>
        </Container>
    )
}