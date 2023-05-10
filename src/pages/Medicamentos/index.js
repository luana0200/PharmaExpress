import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import acetilcisteína from "./imagens/acetilcisteína.png"
import allexofedrin from "./imagens/allexofedrin.png"
import ambroxol from "./imagens/ambroxol.png"
import carbocisteína from "./imagens/carbocisteína.png"
import complexo from "./imagens/complexo.png"
import condres from "./imagens/condres.png"
import cystex from "./imagens/cystex.png"
import declofenaco from "./imagens/declofenaco.png"
import desloratadina from "./imagens/desloratadina.png"
import dipirona from "./imagens/dipirona.png"
import doricin from "./imagens/doricin.png"
import dorspan from "./imagens/dorspan.png"
import emsgrip from "./imagens/emsgrip.png"
import fendizoato from "./imagens/fendizoato.png"
import gemax from "./imagens/gemax.png"
import ibuprofeno from "./imagens/ibuprofeno.png"
import paracetamol from "./imagens/paracetamol.png"
import simeticona from "./imagens/simeticona.jpg"
import sominex from "./imagens/sominex.png"
import suplevit from "./imagens/suplevit.png"


import visa12 from '../../components/Header/imagens/visa12.png'

export default function Medicamentos() {
    return (
        <Container fluid>
            <div className='cabecalho'><h1>MEDICAMENTOS</h1></div>
            <Row className='d-flex justify-content-center'>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={acetilcisteína} alt="Acetilcisteína" />
                    <br />
                    <Card.Body>
                        <Card.Title><h2>Acetilcisteína Xarope 120ml EMS</h2></Card.Title>


                        <div className='Container llog'>
                            <Link to='/Acetilcisteína'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={allexofedrin} alt="Allexofredrin" />
                    <Card.Body>

                        <Card.Title><h2>Allexofedrin 120mg 10 Comprimidos EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Allexofedrin'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />

                    <Card.Img variant="top" width="220px" src={ambroxol} alt="Ambroxol" />
                    <br />
                    <Card.Body>

                        <Card.Title><h2>Ambroxol  Xarope 120ml EMS</h2></Card.Title>

                        <div className='Container llog'>
                            <Link to='/Ambroxol'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={carbocisteína} alt="Carbocisteína" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Carbocisteína Xarope 100ml EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Carbocisteína'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={complexo} alt="Complexo b" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Complexo B 100 Comprimidos EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Complexob'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={condres} alt="Condres" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Condres Colágeno 90 cápsulas EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/condres'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={cystex} alt="Cystex" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Cystex  17mg EMS</h2></Card.Title>
                        <p />
                        <div className='Container llog'>
                            <Link to='/Cystex'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={declofenaco} alt="Diclofenaco" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Diclofenaco Gel Creme Com 60g EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Declofenaco'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={desloratadina} alt="Desloratadina" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Desloratadina 30 Comprimidos EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Desloratadina'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={dipirona} alt="Dipirona" />
                    <br />
                    <Card.Body>
                        <Card.Title><h2> Dipirona Sódica  10ml EMS</h2></Card.Title> <p />
                        <div className='Container llog'>
                            <Link to='/Dipirona'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={doricin} alt="Doricin" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Doricin  300mg 36 Comprimidos EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Doricin'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={dorspan} alt="Dorspan" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Dorspan  20ml EMS</h2></Card.Title> <p />
                        <div className='Container llog'>
                            <Link to='/Dorspan'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>

                    <br />
                    <Card.Img variant="top" width="220px" src={emsgrip} alt="Emsgrip" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>EMSGRIP Limão e Mel Sachê EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Emsgrip'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={fendizoato} alt="Fendizoato" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Fendizoato Xarope 120ml EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Fendizoato'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={gemax} alt="Gelmax" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Gelmax Sabor Limão EMS</h2></Card.Title><p />
                        <div className='Container llog'>
                            <Link to='/Gemax'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br /><br/><br/>
                    <Card.Img variant="top" width="220px" src={ibuprofeno} alt="Ibuprofeno" />
                    <Card.Body>
                        <br /><br/>
                        <Card.Title><h2>Ibuprofeno 200mg 20 Comprimidos EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Ibuprofeno'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={paracetamol} alt="Paracetamol" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Paracetamol 770mg 20 Comprimidos EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Paracetamol'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={simeticona} alt="Simeticona" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Simeticona 17ml EMS</h2></Card.Title><p />
                        <div className='Container llog'>
                            <Link to='/Simeticona'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={sominex} alt="Sominex" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Sominex Composto 20 Comprimidos  EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Sominex'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={suplevit} alt="Suplevit" />
                    <Card.Body>
                        <br />
                        <Card.Title><h2>Suplevit 30 Cápsulas EMS</h2></Card.Title><p />
                        <div className='Container llog'>
                            <Link to='/Suplevit'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

            </Row>
            <div className='fluid '>
                <img src={visa12} alt="creme" /> <br />
                <h7>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:18010-180| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-6987 | SAC – Serviço de Atendimento ao Cliente: 6987-3218, Dúvidas, elogios e reclamações:
                    atendimento@pharmaexpress.com.br.</h7><br />
                <p> <h7>Política de privacidade | © 2023 RD. Todos os direitos reservados.</h7> </p>
            </div>
        </Container>
    )
}