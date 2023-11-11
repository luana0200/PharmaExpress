// import { Link, useParams } from 'react-router-dom'
// import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import apiBack from '../../../services/apiBack'
// import React, {useEffect, useState} from 'react'

// export default function Details () {
// const {id} = useParams()
// const[dados, setDados] = useState([])



// useEffect(() => {
//     async function listarPdt() {
//         const result = await apiBack.get('/ListarPdtUnico' + id);

//         setDados(result.dados);
//     }

//     listarPdt()
// }, [])

// return(
    
//     <Container>
//         <div><h1>Produtos</h1></div>
//         <Card className='m-2, p-2'>
//             <Card.Img className='detail' variant='top' src={dados.banner}  />
//             <h4>{dados.name}</h4>
//             <br/>
//             {dados.description}
//             <h1>
//                 R$ {dados.value}
//             </h1>
//             {<div className='Container button' onClick={""}>
//                 <Link to='/Carrinho'><Button variant='secondary'>COMPRAR</Button></Link>
//                 </div>}
//         </Card>
//     </Container>
//     )}