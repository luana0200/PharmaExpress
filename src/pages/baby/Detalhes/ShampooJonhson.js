// import ShampooJonhson from '../imagens/ShampooJonhson.webp'
// import './baby.css'
// import { useState } from 'react'
// import apiBack from '../../../services/apiBack'
// import { useNavigate } from 'react-router-dom'

// import Container from 'react-bootstrap/esm/Container'
// import Button from 'react-bootstrap/esm/Button'
// import Card from 'react-bootstrap/Card'

// export default function shampooJonhson() {

//     const navigation = useNavigate()
//     const [produtos, setProdutos] = useState('')

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
//                 <Card.Img className='detail' variant="top" src={ShampooJonhson} alt="Shampoo" />
//                 <h4> Johnson's Baby 400ml</h4>
//                 <br />
//                 Johnson's Baby ajuda a realçar a beleza dos cabelos claros, além de limpar suavemente,
//                 sem agredir o couro cabeludo do bebê.

//                 <h1>
//                     R$ 49,90
//                 </h1>
//                 {/* <div className='Container button'>
//                     <Link to='/Carrinho'> <Button variant="secondary">COMPRAR</Button></Link>
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
//         </Container >
//     )
// }