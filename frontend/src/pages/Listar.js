import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import api from '../services/apiBack'


export default function ListarCategoria() {

    const [categorias, setCategorias] = useState([''])
    const [idCategorias, setIdCategoris] = useState([''])
    // const [id, setId] = useState([''])

    useEffect(() => {
        async function listarCategorias() {

            try {
                const resposta = await api.get('/ListarCategoriasUnico', {
                    where: {
                        id: categorias
                    },
                })
                setCategorias(resposta.data)
            } catch (erro) {
                console.error('Erro ao listar categorias:', erro)
            }
        }
        listarCategorias()
    }, [])

    // useEffect(() => {
    //     async function listarCategorias() {
    //         try {
    //             console.log(idCategoria)
    //             const resposta = await api.get(`/ListarCategoriasUnico/${idCategoria}`)
    //             setProdutos(resposta.data)
    //         } catch (erro) {
    //             console.error('Erro ao listar produtos por categoria:', erro)
    //         }
    //     }
    //     listarCategorias()
    // }, [])


    return (
        <Container fluid>
            <div className='cabecalho'><h1>Produtos</h1></div>

            <Row className='d-flex justify-content-center'>
                {categorias.map((item) => { //mapear os seus itens
                    return (
                        <Card className='m-2' style={{ width: '17rem' }}
                            value={idCategorias} key={item.id}>
                            <Card.Body>
                                <Card.Title><h2>{item.name}</h2></Card.Title>
                                <Card.Title><h2>{item.description}</h2></Card.Title>

                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        </Container>
    )
}