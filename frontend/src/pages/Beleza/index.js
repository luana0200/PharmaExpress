import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiTrash2, FiEdit } from 'react-icons/fi'
import { toast } from 'react-toastify'
import apiBack from '../../services/apiBack'


export default function ListarUsuarios() {
    const navigation = useNavigate()

    const [produtos, setProdutos] = useState([''])

    useEffect(() => {
        async function listarProdutos() {
            const resposta = await apiBack.get('/ListarProdutos')
            setProdutos(resposta.data)
        }
        listarProdutos()
    }, [produtos])

    

    return (
        <div className='conteinerListar'>
            <h1>BELEZA</h1>
            <div className='listarUsuarios'>
                <table>
                    <thead>
                        <tr>
                            <th>ID - </th>
                            <th>Nome - </th>
                            <th> - </th>
                            <th>Criado - </th>
                            <th>Alterado - </th>
                            
                        </tr>
                        {produtos.map((resultado, file) => {
                            return (
                                <tr>
                                    <td>{resultado.id}</td>
                                    <td>{resultado.name}</td>
                                    <td>{`C:/Users/isabella.ivsilva.SENACEDU/Documents/GitHub/PharmaExpress/backend/tmp/${file.banner_path}`}</td>
                                    <td>{resultado.create_at}</td>
                                    <td>{resultado.update_at}</td>
                                    
                                </tr>

                            )
                        })}
                    </thead>
                </table>
            </div>
            <button className='buttonInicioListar' onClick={() => navigation('/Dashboard')} >Dashboard</button>
        </div>
    )
}

// import { Link } from 'react-router-dom'

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Badge from 'react-bootstrap/esm/Badge';

// import base from "./imagens/base.png"
// //import batom from "./imagens/batom.png"
// import delineador from "./imagens/delineador.png"
// import paleta from "./imagens/paleta.png"
// import rimel from "./imagens/rimel.png"
// import perfume1 from "./imagens/perfume1.png"
// import perfume4 from "./imagens/perfume4.png"
// import hidratante from './imagens/Hidratante2.png'
// import protetorsolar from "./imagens/protetorsolar.png"
// import demaquilante from "./imagens/Demaquilante2.png"
// // import esfoliante from "./imagens/Esfoliante2.png"
// // import shampoomorango from "./imagens/shampoomorango2.png"
// // import shampooacai from "./imagens/shampooacai2.png"
// // import esmaltepreto from "./imagens/esmaltepreto.png"
// // import esmaltevermelho from "./imagens/esmaltevermelho.png"

// import visa12 from '../../components/Header/imagens/visa12.png'

// export default function Beleza() {
//     return (
//         <Container fluid>

//             <div className='cabecalho'><h1>BELEZA</h1></div>

//             <Row className='d-flex justify-content-center'>
//                 <Card className='m-2' style={{ width: '17rem' }}>
//                     <Badge bg="danger">PROMOÇAO 10%1</Badge>
//                     <Card.Img variant="top" width="220px" src={base} />
//                     <Card.Body>
//                         <br />
//                         <Card.Title><h2>Base Líquida Ultra Matte</h2></Card.Title>
//                         <div className='Container llog'>
//                             <Link to='/BaseUltra'><Button variant="secondary">Detalhes</Button></Link>
//                         </div>
//                     </Card.Body>
//                 </Card>

//                 <Card className='m-2' style={{ width: '17rem' }}>
//                     <Badge bg="danger">PROMOÇAO 10%</Badge>
//                     {/* <Card.Img variant="top" width="220px" src={batom} /> */}
//                     <br />
//                     <Card.Body>
//                         {/* <Card.Title><h2>Batom Líquido Matte Tint Rosé </h2></Card.Title> */}
//                         <div className='Container llog'>
//                             <Link to='/Batom'><Button variant="secondary">Detalhes</Button></Link>
//                         </div>
//                     </Card.Body>
//                 </Card>

//                 <Card className='m-2' style={{ width: '17rem' }}>
//                     <br />
//                     <Card.Img variant="top" width="220px" src={delineador} alt="Deliniador" />
//                     <br />
//                     <Card.Body>
//                         <Card.Title><h2>Deliniador Líquido </h2></Card.Title>
//                         <div className='Container llog'>
//                             <Link to='/Deliniador'><Button variant="secondary">Detalhes</Button></Link>
//                         </div>
//                     </Card.Body>
//                 </Card>

//                 <Card className='m-2' style={{ width: '17rem' }}>
//                     <br />
//                     <Card.Img variant="top" width="220px" src={paleta} alt="Paleta" />
//                     <br />
//                     <Card.Body>
//                         <Card.Title><h2>Palette de Sombras Crystal</h2></Card.Title>
//                         <div className='Container llog'>
//                             <Link to='/Paleta'><Button variant="secondary">Detalhes</Button></Link>
//                         </div>
//                     </Card.Body>
//                 </Card>

//                 <Card className='m-2' style={{ width: '17rem' }}>
//                     <Badge bg="danger">PROMOÇAO 10%</Badge>
//                     <Card.Img variant="top" width="220px" src={rimel} />
//                     <Card.Body>
//                         <br />
//                         <Card.Title><h2>Máscara Para Cílios Super Up</h2></Card.Title>
//                         <div className='Container llog'>
//                             <Link to='/Rimel'><Button variant="secondary">Detalhes</Button></Link>
//                         </div>
//                     </Card.Body>
//                 </Card>
                
//             </Row>
//             <div className='fluid '>
//                 <img src={visa12} alt="creme" /> <br />
//                 <h2>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:18010-180| Horário de Atendimento: De Segunda à Domingo
//                     das 7h às 21h, inclusive feriado | Televendas: 1234-6987 | SAC – Serviço de Atendimento ao Cliente: 6987-3218, Dúvidas, elogios e reclamações:
//                     atendimento@pharmaexpress.com.br.</h2><br />
//                 <h2>Política de privacidade | © 2023 RD. Todos os direitos reservados.</h2> 
//             </div>
//         </Container>

//     )

// }
