import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ShampooJonhson from "./imagens/ShampooJonhson.webp"
import Lenco from "./imagens/Lenco umidecido.png"
import Sabonet from "./imagens/Sabonet Liquido.webp"
import sbonete from "./imagens/sbonete barra.webp"
import Locao from "./imagens/Locao hidratante.jpg"


import visa12 from '../../components/Header/imagens/visa12.png'

export default function Baby() {
    return (
        <Container fluid >
            <div className='cabecalho'><h1>BABY</h1></div>

            <Row className='d-flex justify-content-center'>
                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={ShampooJonhson} alt="Shampoo" />
                    <Card.Body>
                        <Card.Title><h2>Shampoo Jonhson Baby 400 ml</h2></Card.Title>
                        <div className='Container   llog'>
                            <Link to='/ShampooJonhson'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>


                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={Sabonet} alt="Sabonet" />
                    <Card.Body>
                        <Card.Title><h2> Sabonete Liquido Jonhson Baby 400ml </h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Sabao'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={Locao} alt="Locao" />
                    <Card.Body>
                        <Card.Title><h2> Loção hidratante Jonhson baby 200ml </h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Locao' ><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={sbonete} alt="sabonete" />
                    <Card.Body>
                        <Card.Title><h2>    Sabonete em Barra Jonhson Baby 80g</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Sabonete'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={Lenco} alt="Lenco" />
                    <Card.Body>
                        <Card.Title><h2>Lenço Umidecido Jonhson Baby 48 unidade </h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/lenco'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
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
                <p/>
                <br/>

            </Row>

            <div className='fluid '>
                <img src={visa12} alt="creme" />
                <br />
                <h7>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-170| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-7987 | SAC – Serviço de Atendimento ao Cliente: 7987-3217, Dúvidas, elogios e reclamações:</h7>
                <p> <h7>Política de privacidade | © 2023 RD. Todos os direitos reservados.</h7> </p>
            </div>
        </Container >
    )
}