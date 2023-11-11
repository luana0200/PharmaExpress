// import fralda from '../imagens/Fralda.webp'
// import './baby.css'
// // import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import apiBack from '../../../services/apiBack'
// import { useNavigate } from 'react-router-dom'

// import Container from 'react-bootstrap/esm/Container'
// import Button from 'react-bootstrap/esm/Button'
// import Card from 'react-bootstrap/Card'

// export default function Fralda() {

//     const navigation = useNavigate()
//     const [produtos, setProdutos] = useState([''])

//     // async function cadastrarProdutos() {
//     //     await  apiBack.post('/CriarProdutos')
//     //     await apiBack.get('/ListarProdutos')
//     //     navigation('/Carrinho')
//     //     toast.success('Produto Adicionado ao Carrinho')
//     // }


//     async function listarProdutos() {
//         const response = await apiBack.get('/ListarPdtUnico', {
//             params: {
//                 baseURL: 'http://localhost:3334',
//                 language: 'pt-BR'
//             }
//         }
//         )
//         console.log(response.data)
//         navigation('/Carrinho')
//     }


//     return (

//         <Container >
//             <Card className='m-2, p-2'>

//                 <Card.Img className='detail' variant="top" src={fralda} alt="Fralda" />
//                 <h4> Fralda Pampers 24 unidades</h4><br />
//                 Pampers Confort Sec é uma fralda descartável para proporcionar uma noite tranquila ao bebê. Ela contém canais de
//                 ar que permitem uma circulação livre do ar dentro
//                 da fralda, evitando que o bumbum do bebê fique abafado e deixando a pele arejada e sequinha durante a noite.
//                 <br />

//                 <h1>
//                     R$ 31,90
//                 </h1>
//                 {/* <div className='Container button'>
//                     <Button variant="secondary"
//                         onClick={() => cadastrarProdutos(produtos.id)}>COMPRA</Button>
//                 </div> */}

//                 <div className='Container button'>
//                     {produtos.map((produtos) => {
//                         return (
//                             <Button variant="secondary"
//                                 onClick={() => listarProdutos(produtos.id)}>COMPRA</Button>
//                         )
//                     })}
//                 </div>
//             </Card>
//         </Container>
//     )
// }