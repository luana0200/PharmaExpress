import { Link } from 'react-router-dom'
import CarroselHome from '../../bootstrap/carroselHome.js'
import '../../components/Header/header.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'

import base from "../Beleza/imagens/base.png"
import rimel from '../Beleza/imagens/rimel.png'
import perfume1 from '../Beleza/imagens/perfume1.png'
import deso from '../HPessoal/imagens H/deso M.webp'
// import creme from '../HPessoal/imagens H/creme facial.png'
// import hidratante from '../Beleza/imagens/Hidratante2.png'

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

                        <Card.Text>
                            Base Líquida Soul Ultra Matte proporciona uma make a prova de photos e pele sequinha o dia todo
                            Conta com vitamina E que hidratada a pele, efeito antipoluição e FPS 15 é perfeita para usar no dia a dia
                        </Card.Text>



                        {/* <div className='Container llog'>
                            <Link to='/BaseUltra'><Button variant="secondary">Detalhes</Button></Link>
                        </div> */}
                    </Card.Body>
                </Card>

                {/* <Card className='m-1' style={{ width: '20rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={hidratante} />
                    <Card.Body>
                        <Card.Title><h2>Loção Hidratante Corporal Lyra 150ml</h2></Card.Title>
                        <div className=' Container llog'>
                            <Link to='/Batom'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card> */}



                <Card className='m-1' style={{ width: '20rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={rimel} />
                    <Card.Body>
                        <Card.Title><h2>Máscara Para Cílios Super Up</h2></Card.Title>
                        <Card.Text>
                            Máscara Super Up Niina Secrets Eudora: 13x mais volume e curvatura nas alturas.
                            Fórmula com fibras e exclusiva tecnologia Secrets, com óleo de rosas e vitaminas
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '20rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={perfume1} />
                    <Card.Body>
                        <Card.Title><h2>Desodorante Colônia 95ml</h2></Card.Title>
                        <Card.Text>
                            Indicado para todos os tipos de pele.
                            Protege 3 vezes mais do que os antitranspirantes comuns.
                            Controla o suor excessivo e previne o mau odor por 96 horas.
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className='m-1' style={{ width: '20rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={deso} alt="sabonete liq" />
                    <Card.Body>
                        <Card.Title><h2>Desodorante Rexona Masc 200 ml</h2></Card.Title>
                        <Card.Text>
                            Indicado para todos os tipos de pele.
                            Protege 3 vezes mais do que os antitranspirantes comuns.
                            Controla o suor excessivo e previne o mau odor por 96 horas.
                        </Card.Text>
                    </Card.Body>
                </Card>



                {/* <Card className='m-1' style={{ width: '20rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={creme} alt="creme" />
                    <Card.Body>
                        <Card.Title><h2>Creme Facial 100 g </h2></Card.Title>
                        <div className=' Container llog'>
                            <Link to='/CremeFacial'><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card> */}
            </Row>

            <div className=' Container llog'>
                <Link to='/Produtos'><Button variant="secondary">Mais Produtos</Button></Link>
            </div>

            <div className='fluid '>
                <img src={visa12} alt="creme" /> <br />
                <h2>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:18010-180| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-6987 | SAC – Serviço de Atendimento ao Cliente: 6987-3218, Dúvidas, elogios e reclamações:
                    atendimento@pharmaexpress.com.br.</h2><br />
                <h2>Política de privacidade | © 2023 RD. Todos os direitos reservados.</h2>
            </div>
        </Container>
    )
}