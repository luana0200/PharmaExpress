import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import acetilcisteína from "./imagens/acetilcisteína.png"
import ambroxol from "./imagens/ambroxol.png"
import complexo from "./imagens/complexo.png"
import cystex from "./imagens/cystex.png"
import declofenaco from "./imagens/declofenaco.png"
import desloratadina from "./imagens/desloratadina.png"
import dipirona from "./imagens/dipirona.png"
import doricin from "./imagens/doricin.png"
import dorspan from "./imagens/dorspan.png"
import emsgrip from "./imagens/emsgrip.png"
import fendizoato from "./imagens/fendizoato.png"
import gemax from "./imagens/gemax.png"
import paracetamol from "./imagens/paracetamol.png"
import simeticona from "./imagens/simeticona.jpg"
import sominex from "./imagens/sominex.png"


import visa12 from '../../components/Header/imagens/visa12.png'

export default function Medicamentos() {
    return (
        <Container fluid>
            <div className='cabecalho'><h1>MEDICAMENTOS</h1></div>
            <Row className='d-flex justify-content-center'>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={acetilcisteína} alt="Acetilcisteína" />
                    <Card.Body>
                        <Card.Title><h2>Acetilcisteína Xarope 120ml EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Acetilcisteína'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={ambroxol} alt="Ambroxol" />
                    <Card.Body>
                        <Card.Title><h2>Cloridrato De Ambroxol  Xarope 120ml EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Ambroxol'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>


                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={complexo} alt="Complexo b" />
                    <Card.Body>
                        <Card.Title><h2>Complexo B 100 Comprimidos EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Complexob'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>



                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={declofenaco} alt="Diclofenaco" />
                    <Card.Body>
                        <Card.Title><h2>Diclofenaco Gel Creme Com 60g EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Declofenaco'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={desloratadina} alt="Desloratadina" />
                    <Card.Body>
                        <Card.Title><h2>Desloratadina 30 Comprimidos EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Desloratadina'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>


                <Card className='m-2' style={{ width: '17rem' }}>

                    <br />
                    <Card.Img variant="top" width="220px" src={emsgrip} alt="Emsgrip" />
                    <Card.Body>
                        <Card.Title><h2>EMSGRIP Limão e Mel Sachê EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Emsgrip'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={doricin} alt="Doricin" />
                    <Card.Body>
                        <Card.Title><h2>Doricin  300mg 36 Comprimidos EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Doricin'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={cystex} alt="Cystex" />
                    <Card.Body>
                        <Card.Title><h2>Cystex  17mg EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Cystex'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={simeticona} alt="Simeticona" />
                    <Card.Body>
                        <Card.Title><h2>Simeticona 17ml EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Simeticona'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>



                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={dipirona} alt="Dipirona" />
                    <Card.Body>
                        <Card.Title><h2> Dipirona Sódica  10ml EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Dipirona'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={fendizoato} alt="Fendizoato" />
                    <Card.Body>
                        <Card.Title><h2>Fendizoato Xarope 120ml EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Fendizoato'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={gemax} alt="Gelmax" />
                    <Card.Body>
                        <Card.Title><h2>Gelmax Sabor Limão EMS</h2></Card.Title><p />
                        <div className='Container llog'>
                            <Link to='/Gemax'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={paracetamol} alt="Paracetamol" />
                    <Card.Body>
                        <Card.Title><h2>Paracetamol 770mg 20 Comprimidos EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Paracetamol'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={dorspan} alt="Dorspan" />
                    <Card.Body>
                        <Card.Title><h2>Dorspan Composto Gotas 20ml EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Dorspan'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={sominex} alt="Sominex" />
                    <Card.Body>
                        <Card.Title><h2>Sominex Composto 20 Comprimidos  EMS</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Sominex'><Button variant="secondary">Detalhes</Button></Link>
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