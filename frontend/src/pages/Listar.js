// import { useState, useEffect } from 'react'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Card from 'react-bootstrap/Card'
// import api from '../services/apiBack'


// export default function ListarCategoria() {

//     const [categorias, setCategorias] = useState([''])
//     const [idCategorias, setIdCategorias] = useState([''])

//     useEffect(() => {
//         async function loadCate() {
//             const resposta = await api.get(`/ListarCategoriasUnico/${idCategorias}`, {
//                 data: {
//                     idCategoria: idCategorias
//                 }
//             })
//             setIdCategorias(idCategorias)
//         }
//         loadCate()
//     }, [])

//     console.log(idCategorias)

//     return (
//         <Container fluid>
//             <div className='cabecalho'><h1>Produtos</h1></div>

//             <Row className='d-flex justify-content-center'>
//                 {categorias.map((item) => { //mapear os seus itens
//                     return (
//                         <Card className='m-2' style={{ width: '17rem' }}
//                             value={idCategorias} key={item.id}>
//                             <Card.Body>
//                                 <Card.Title>
//                                     <h2>{item.name}</h2>
//                                     <h2>{item.description}</h2>
//                                 </Card.Title>
//                             </Card.Body>
//                         </Card>
//                     )
//                 })}
//             </Row>
//         </Container>
//     )
// }