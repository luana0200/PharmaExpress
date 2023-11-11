// import aptamil from '../imagens/Formula Aptamil.webp'
// import './baby.css'
// // import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import apiBack from '../../../services/apiBack'
// import { useNavigate } from 'react-router-dom'

// import Container from 'react-bootstrap/esm/Container'
// import Button from 'react-bootstrap/esm/Button'
// import Card from 'react-bootstrap/Card'

// export default function Aptamil() {
//     const navigation = useNavigate()
//     const [produtos, setProdutos] = useState([''])

//     // async function listarProdutos() {

//     //     await apiBack.get('/ListarPdtUnico')

//     //     navigation('/Carrinho')
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
//                 <Card.Img className='detail' variant="top" src={aptamil} alt="Aptamil" />
//                 <h4 >Formula Aptamil 800g</h4><br />
//                 Aptamil Premium 1 é uma fórmula infantil de partida, indicada para alimentação de bebês
//                 lactentes desde o nascimento até o 6º mês de vida, adicionada de prebióticos.
//                 O produto contém proteínas lácteas, ácidos graxos poli-insaturados de cadeia longa (DHA e ARA), prebióticos, nucleotídeos e taurina.
//                 <br />
//                 <h1>
//                     R$ 49,90
//                 </h1>
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