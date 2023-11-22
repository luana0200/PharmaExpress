import { Link, useParams } from 'react-router-dom'
import apiBack from '../../services/apiBack'
import React, { useEffect, useState } from 'react'
import { BiCartAdd } from "react-icons/bi";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import visa12 from '../../components/Header/imagens/visa12.png'

export default function Index() {
    const {id} = useParams()
    const [data, setData] = useState([''])
    const [produto, setProduto] = useState([''])

    useEffect(() => {
        async function listarPdt() {
            const result = await apiBack.get('/ListarProdutos')
            setData(result.data)
        }

        listarPdt()
    }, [data])

    function adicionarCarrinho(){
        const minhaLista = localStorage.getItem('@produtoscarrinho')
        let pdtAdicionado = JSON.parse(minhaLista) || []
        const verificarProdutos = pdtAdicionado.some( (produto) => produto.id === produto.id )
        if(verificarProdutos){
           
            return
        }
        produto.push(produto)
        localStorage.setItem('@produtoscarrinho', JSON.stringify(pdtAdicionado))
              
    }



    return (
        <Container fluid>
            <div className='cabecalho'><h1>Produtos</h1></div>


            <Row className='d-flex justify-content-center'>

                {data.map((item) => {
                    return (
                        <Card className='m-2' style={{ width: '17rem' }} key={item.id}>
                            <Card.Img variant="top" width="220px" src={`http://localhost:3334/file/${item.banner}`} />
                            <Card.Body>
                                <Card.Title><h2>{item.name}</h2></Card.Title>
                                <Card.Title><h2>{item.description}</h2></Card.Title>
                                <div className='Container llog'>
                                <button onClick={adicionarCarrinho}><Link to={`/Carrinho/${item.id}`}>Carrinho</Link></button>
                                {/* <BiCartAdd size='1.5rem' color='lightseagreen'/> */}
                                </div>

                            </Card.Body>
                        </Card>
                    )
                })}

            </Row>
            <div className='fluid '>
                <img src={visa12} alt="creme" />
                <br />
                <p>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-170| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-7987 | SAC – Serviço de Atendimento ao Cliente: 7987-3217, Dúvidas, elogios e reclamações:</p>
                <p>Política de privacidade | © 2023 RD. Todos os direitos reservados.</p>
            </div>
        </Container >
    )
} 


// import { Link, useParams } from 'react-router-dom'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import apiBack from '../../../services/apiBack'
// import React, { useEffect, useState } from 'react'
// import visa12 from '../../../components/Header/imagens/visa12.png'


// export default function Index() {
//     const { id } = useParams()
//     const [data, setData] = useState([''])
//     const [name, setName] = useState([''])

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await apiBack.get('/ListarCategorias' + {id})

//             setData(result.data)
//         }

//         const fetchCategoryName = async () => {
//             const name = await apiBack.get('categoryName/' + data[0].categoryId)
//             setName(name.data)
//         }
//         fetchData()
//         fetchCategoryName()
//     }, [])
//     return (
//         <Container fluid>
//             <div className='cabecalho'><h1>{name}</h1></div>

//             {data.map((item, index) => (
//                 <Row key={index} className='d-flex justify-content-center'>
//                     <Card className='m-2' style={{ width: '17rem' }}>
//                         <br />
//                         <Card.Img src={`http://localhost:3334/file/${item.banner}`} />
//                         <Card.Body>
//                             <Card.Title><h2>{item.name}</h2></Card.Title>
//                             <div className='Container  llog'>
//                                 <Link to={`/Carrinho/${item.id}`}>Comprar</Link>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Row>
//             ))}
//             <div className='fluid'>
//                 <img src={visa12} alt="creme" />
//                 <br />
//                 <p> Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-170| Horário de Atendimento: De Segunda à Domingo
//                     das 7h às 21h, inclusive feriado | Televendas: 1234-7987 | SAC – Serviço de Atendimento ao Cliente: 7987-3217, Dúvidas, elogios e reclamações:</p>
//                 <p>Política de privacidade | © 2023 RD. Todos os direitos reservados.</p>
//             </div>

//         </Container>
//     )
// }
