import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/esm/Badge';

import base from "./imagens/base.png"
import batom from "./imagens/batom.png"
import delineador from "./imagens/delineador.png"
import paleta from "./imagens/paleta.png"
import rimel from "./imagens/rimel.png"
import perfume1 from "./imagens/perfume1.png"
import perfume4 from "./imagens/perfume4.png"
import hidratante from './imagens/Hidratante2.png'
import protetorsolar from "./imagens/protetorsolar.png"
import demaquilante from "./imagens/Demaquilante2.png"
// import esfoliante from "./imagens/Esfoliante2.png"
// import shampoomorango from "./imagens/shampoomorango2.png"
// import shampooacai from "./imagens/shampooacai2.png"
// import esmaltepreto from "./imagens/esmaltepreto.png"
// import esmaltevermelho from "./imagens/esmaltevermelho.png"

import visa12 from '../../components/Header/imagens/visa12.png'

export default function Beleza() {
    return (
        <Container fluid>

            <div className='cabecalho'><h1>BELEZA</h1></div>

            <Row className='d-flex justify-content-center'>
                <Card className='m-2' style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%1</Badge>
                    <Card.Img variant="top" width="220px" src={base} />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Base Líquida Ultra Matte</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/BaseUltra'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={batom} />
                    <br />
                    <Card.Body>
                        <Card.Title><h2>Batom Líquido Matte Tint Rosé </h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Batom'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={delineador} alt="Deliniador" />
                    <br />
                    <Card.Body>
                        <Card.Title><h2>Deliniador Líquido </h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Deliniador'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={paleta} alt="Paleta" />
                    <br />
                    <Card.Body>
                        <Card.Title><h2>Palette de Sombras Crystal</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Paleta'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={rimel} />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Máscara Para Cílios Super Up</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Rimel'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
                <p/>
                <br/>
                <p/>
                <br/> 
                <p/>
                <br/>
                <p/>
                <br/> 
                <p/>
                <br/>
                <p/>
                <br/>
            </Row>
            <div className='fluid '>
                <img src={visa12} alt="creme" />
                <br />
                <h7>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-170| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-6987 | SAC – Serviço de Atendimento ao Cliente: 6987-3217, Dúvidas, elogios e reclamações:
                    atendimento@pharmaexpress.com.br.</h7><br />
                <p> <h7>Política de privacidade | © 2023 RD. Todos os direitos reservados.</h7> </p>
            </div>
        </Container>

    )

}
