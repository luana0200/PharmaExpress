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
// import dipirona from "./imagens/dipirona.png"
// import doricin from "./imagens/doricin.png"
// import emsgrip from "./imagens/emsgrip.png"
// import simeticona from "./imagens/simeticona.jpg"


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