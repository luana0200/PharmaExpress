import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import api from '../services/apiBack'


export default function ListarCategoria() {

    // const [categorias, setCategorias] = useState([''])
    // const [idCategorias, setIdCategoris] = useState('')
    // const [id, setId] = useState([''])

    const { idCategoria } = useParams()
    const [produtos, setProdutos] = useState([])


    // useEffect(() => {
    //     async function listarCategorias() {

    //         try {
    //             const resposta = await api.get('/ListarCategoriasUnico', {
    //                 where: {
    //                     categoriaId: id
    //                 }
    //             })
    //             setCategorias(resposta.data)
    //         } catch (erro) {
    //             console.error('Erro ao listar categorias:', erro)
    //         }
    //     }
    //     listarCategorias()
    // }, [])

    useEffect(() => {
        async function listarCategorias() {
            try {
                console.log(idCategoria)
                const resposta = await api.get(`/ListarCategoriasUnico/${idCategoria}`)
                setProdutos(resposta.data)
            } catch (erro) {
                console.error('Erro ao listar produtos por categoria:', erro)
            }
        }
        listarCategorias()
    }, [])


    return (
        <Container fluid>
            <div className='cabecalho'><h1>Produtos</h1></div>

            <Row className='d-flex justify-content-center'>


                <ul>
                    {produtos.map((produto) => (
                        <li key={produto.id}>
                            <h2>{produto.nome}</h2>
                            <p>{produto.descricao}</p>
                            {/* Adicione mais informações do produto conforme necessário */}
                        </li>
                    ))}
                </ul>
            </Row>
        </Container>
    )
}