import { Link } from 'react-router-dom'
import '../Beleza/Detalhes/bela.css'

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
import perfume2 from "./imagens/perfume2.png"
import perfume3 from "./imagens/perfume3.png"
import perfume4 from "./imagens/perfume4.png"
import hidratante from './imagens/Hidratante2.png'
import protetorsolar from "./imagens/protetorsolar.png"
import gelsecativo from "./imagens/gelsecativo.png"
import demaquilante from "./imagens/Demaquilante2.png"
import esfoliante from "./imagens/Esfoliante2.png"
import shampoomorango from "./imagens/shampoomorango2.png"
import shampooacai from "./imagens/shampooacai2.png"
import shampookarite from "./imagens/shampookarite2.png"
import esmaltepreto from "./imagens/esmaltepreto.png"
import esmaltevermelho from "./imagens/esmaltevermelho.png"
import esmaltebranco from "./imagens/esmaltebranco.png"

import visa12 from '../../components/Header/imagens/visa12.png'

export default function Beleza() {
    return (
        <Container fluid>
            
            <div className='cabecalho'><h1>BELEZA</h1></div>
        <Row className='d-flex justify-content-center'>
                <Card className='m-2' style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
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
                    <br/>
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
                    <br/>
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

                <Card className='m-2' style={{ width: '17rem' }}><br />
                    <Card.Img variant="top" width="220px" src={perfume1} alt="Perfume" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Desodorante Colônia </h2></Card.Title>
                        
                        <div className='Container llog'>
                            <Link to='/Perfume1'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={perfume2} alt="Perfume" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Pulse Desodorante Côlonia </h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Perfume2'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={perfume3} alt="Perfume" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>La Victorie Eau de Parfum </h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Perfume3'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={perfume4} alt="Perfume" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Magnific Audaz Eau de Parfum </h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Perfume4'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={protetorsolar} alt="Protetor Solar" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Protetor Solar Facial FPS 70 </h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/ProtetorSolar'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={gelsecativo} alt="Gel Secativo" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Gel Secativo Pele com Acne Ação Rápida 17g</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Gelsecativo' ><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={hidratante} alt="Hidratante" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Loção Hidratante Desodorante Corporal 170ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Hidratante'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="150px" src={demaquilante} alt="demaquilante" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Demaquilante 100ml</h2></Card.Title>
                        <br />
                        <div className='Container llog'>
                            <Link to='/Demaquilante'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={esfoliante} alt="Esfoliante" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Máscara Esfoliante Enzimática 77g</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Esfoliante'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={shampooacai} alt="Shampoo Acai" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Combo Açai e Bambu</h2></Card.Title>
                        <br />
                        <div className='Container llog'>
                            <Link to='/Shampooacai'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={shampoomorango} />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Combo Frutas Vermelhas</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Shampoomorango'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={shampookarite} alt="Shampoo Karité" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Combo Karité</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Shampookarite'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={esmaltepreto} alt="Esmalte Preto" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Esmalte Preto Essencial 7ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Esmaltepreto'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={esmaltebranco} alt="Esmalte Branco" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Esmalte Branco Intensific 7ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/EsmalteBranco'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={esmaltevermelho} />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Esmalte Vermelho Sofisticado 7ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Esmaltevermelho'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

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
