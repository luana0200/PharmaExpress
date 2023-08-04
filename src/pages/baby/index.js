import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ShampooJonhson from "./imagens/ShampooJonhson.webp"
import Mamadeira from "./imagens/Mamadeira Rosa.jpg"
import Lenco from "./imagens/Lenco umidecido.png"
import Fralda from "./imagens/Fralda.webp"
import Sabonet from "./imagens/Sabonet Liquido.webp"
import Pomada from "./imagens/Pomada.webp"
import Chupetas from "./imagens/Chupetas.png"
import Formula from "./imagens/Formula Aptamil.webp"
import Kit from "./imagens/Kit Escova Azul.jpg"
import Locao from "./imagens/Locao hidratante.jpg"
import Rosa from "./imagens/EscovaRosa.jpg"
import talco from './imagens/Talco.jpg'
import lenco from "./imagens/lenco humidecido.png"
import mama from "./imagens/mama azul.webp"
import sbonete from "./imagens/sbonete barra.webp"

import visa12 from '../../components/Header/imagens/visa12.png'

export default function Baby() {
    return (
        <Container fluid >
            <div className='cabecalho'><h1>lunanannanffdgdb</h1></div>
            
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

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={lenco} alt="Locao" />
                    <Card.Body>
                        <Card.Title><h2>Lenço Umidecido  Pampers 48 un.</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Lenco2' ><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={talco} alt='talco' />
                    <Card.Body>
                        <Card.Title><h2>   Talco Johnson 200g</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/talco'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>


                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={Fralda} alt="Fralda" />
                    <Card.Body>
                        <Card.Title><h2>Fralda Pampers 24 unidades</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Fralda' ><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={Pomada} alt="Pomada" />
                    <Card.Body>
                        <Card.Title><h2>  Pomada Hipogloss 130g </h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Pomada'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={Formula} alt="Formula" />
                    <Card.Body>
                        <Card.Title><h2>  Formula Aptamil 800g</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Aptamil'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={Chupetas} alt="Chupetas" />
                    <Card.Body>
                        <Card.Title><h2> Chupetas</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Chupetas'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>


                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={Rosa} alt="Rosa" />
                    <Card.Body>
                        <br/>
                        <Card.Title><h2>   Kit Escova Rosa</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/rosa'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={Kit} alt="Kit Azul" />
                    <Card.Body>
                        <br/>
                        <Card.Title><h2>   Kit Escova Azul</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/kit'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={mama} alt="mama" />
                    <Card.Body>
                        <Card.Title><h2>   Mamadeira Azul 270 ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/Mamadeira'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '17rem' }}>
                    <br />
                    <Card.Img variant="top" width="220px" src={Mamadeira} alt="Mamadeira" />
                    <Card.Body>
                        <Card.Title><h2> Mamadeira Rosa 330 ml</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to='/MamaRosa'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
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