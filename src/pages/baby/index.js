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
import Rosa from "./imagens/Rosa.webp"
import talco from './imagens/Talco.jpg'
import lenco from "./imagens/lenco humidecido.png"
import mama from "./imagens/mama azul.webp"
import sbonete from "./imagens/sbonete barra.webp"

import visa12 from '../../components/Header/imagens/visa12.png'

export default function Baby() {
    return (

        <Container>

            <div className="nave"><h1>BABY</h1></div>

            <Row>
                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px" src={ShampooJonhson} alt="Shampoo" />
                    <Card.Body>
                        <Card.Title><h2>Shampoo Jonhson baby 200 ml</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/ShampooJonhson'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px" src={Mamadeira} alt="Mamadeira" />
                    <Card.Body>
                        <Card.Title><h2> Mamadeira Rosa 250 ml</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/MamaRosa'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>


                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px" src={Lenco} alt="Lenco" />
                    <Card.Body>
                        <Card.Title><h2>Lenço Umidecido Jonhson Baby </h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/lenco'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px" src={lenco} alt="Locao" />
                    <Card.Body>
                        <Card.Title><h2>Lenço Umidecido  Pampers 48 unidade</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Lenco2' ><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px" src={Locao} alt="Locao" />
                    <Card.Body>
                        <Card.Title><h2> Loção hidratante Jonhson baby </h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Locao' ><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>


                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px" src={Fralda} alt="Fralda" />
                    <Card.Body>
                        <Card.Title><h2>Fralda Pampers </h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Fralda' ><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px" src={Sabonet} alt="Sabonet" />
                    <Card.Body>
                        <Card.Title><h2> Sabonete Liquido Jonhson baby  </h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Sabao'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px"src={Pomada} alt="Pomada" />
                    <Card.Body>
                        <Card.Title><h2>  Pomada Hipogloss </h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Sabao'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px"src={Chupetas} alt="Chupetas" />
                    <Card.Body>
                        <Card.Title><h2> Chupetas</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Chupetas'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px"src={Formula} alt="Formula" />
                    <Card.Body>
                        <Card.Title><h2>  Formula Aptamil s</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Aptamil'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px"src={Rosa} alt="Rosa" />
                    <Card.Body>
                        <Card.Title><h2>   Kit Escova Rosa</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/rosa'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px"src={Kit} alt="Kit Azul" />
                    <Card.Body>
                        <Card.Title><h2>   Kit Escova Azul</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/kit'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px"src={mama} alt="mama" />
                    <Card.Body>
                        <Card.Title><h2>   Mamadeira Azul 250 ml</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Mamadeira'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px" src={sbonete} alt="sabonete" />
                    <Card.Body>
                        <Card.Title><h2>    Sabonete em Barra Jonhson Baby</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/Sabonete'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>


                <Card className='m-2' style={{ width: '15rem' }}>
                    <Card.Img variant="top" width="220px" src={talco} alt='talco' />
                    <Card.Body>
                        <Card.Title><h2>   Talco Johnson</h2></Card.Title>
                        <div className='Container details'>
                            <Link to='/talco'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
            </Row>

            <div className='fluid '>
                <img src={visa12} alt="creme" /> 
                <br/>   
                <h5>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-170| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-6985 | SAC – Serviço de Atendimento ao Cliente: 6985-3217, Dúvidas, elogios e reclamações:
                    atendimento@pharmaexpress.com.br.</h5><br />
                <p> <h5>Política de privacidade | © 2023 RD. Todos os direitos reservados.</h5> </p>
                </div>
        </Container>
    )
}