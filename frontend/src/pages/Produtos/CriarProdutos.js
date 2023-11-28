import React, { useState, useEffect } from 'react'
import { IMaskInput } from 'react-imask'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/esm/Button"
import api from '../../services/apiBack'

import '../Cadastro/estilo.css'

export default function CriarProdutos() {

    const navigation = useNavigate()

    const [categorias, setCategorias] = useState([''])
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [provider, setProvider] = useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')

    const [idCategoria, setIdCategoria] = useState('')
    const [imagem, setImagem] = useState(null)

    const iToken = localStorage.getItem('@phlogin2k23')
    const token = JSON.parse(iToken)



    //listarCategorias
    useEffect(() => {
        async function listarCategorias() {
            try {
                const resposta = await api.get('/ListarCategorias', {
                    headers: {
                        Authorization: 'Bearer ' + `${token}`
                    }
                })
                setCategorias(resposta.data)
            } catch (erro) {
                console.error('Erro ao listar categorias:', erro)
            }
        }
        listarCategorias()
    }, [])

    function handleImagem(e) {
        if (!e.target.files) {
            return
        }
        const image = e.target.files[0]
        if (image.type === 'image/png' || image.type === 'image/jpeg') {
            setImagem(image)
        }
    }

    // async function handleCadastro(e) {
    //     try {
    //         e.preventDefault()
    //         const categoriaId = idCategoria
    //         const data = new FormData()

    //         data.append('nome', name)
    //         data.append('preco', value)
    //         data.append('fornecedor', provider)
    //         data.append('quantidade', quantity)
    //         data.append('categoriasId', categoriaId)
    //         data.append('descricao', description)
    //         data.append('banner', imagem)

    //         const resposta = await api.post('/CriarProdutos', data, {

    //         })
    //         toast.success('Enviado com Sucesso')
    //         console.log(resposta)
    //     } catch (err) {
    //         console.error(err)
    //         // console.log(categoriaId)
    //     }
    //     setName('')
    //     setValue('')
    //     setProvider('')
    //     setQuantity('')
    //     setDescription('')
    //     setImagem(null)
    // }

    async function handleCadastro(e) {
        e.preventDefault()
        try {
            if (name === '' || value === '' || provider === '' || quantity === '' || description === '' ) {
                toast.error('Existem Campos em Branco!')
                return
            }
            const result = await api.post('/CriarProdutos', {
                name,
                value,
                provider,
                quantity,
                description,
                imagem
            })
            console.log(result.data.id)
            // if (result.data.id) {
            //     const token = result.data.token
            //     localStorage.setItem('@phlogin2k23', JSON.stringify(token))
            //     navigation('/')
            // }
        } catch (err) {
            toast.error(err.response.data.error)
        }
    }

    return (
        <Container fluid>
            <div className='cabecalho' ><h1>CRIAR PRODUTOS</h1></div>
            <div className="compra" >
                <Form onSubmit={handleCadastro}>
                    <Form.Group >
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            placeholder="Digite seu Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Valor:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            placeholder="Digite o Valor"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Fornecedor:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            placeholder="Digite seu Fornecedor"
                            value={provider}
                            onChange={(e) => setProvider(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            placeholder="Digite a Quantidade"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Descrição:</Form.Label>
                        <Form.Control
                            type="description"
                            placeholder="Digite a Descrição"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Imagem:</Form.Label>
                        <Form.Control
                            type="file"
                            accept='image/jpeg, image/png'
                            onChange={handleImagem}
                        /><br />
                    </Form.Group>

                    <select
                        value={idCategoria}
                        onChange={(e) => setIdCategoria(e.target.value)}>

                        <option >Selecione...</option>
                        {categorias.map((item) => { //mapear os seus itens
                            return (
                                <option value={item.id} key={item.id} >{item.nome}</option>
                            )
                        })}
                    </select>

                    <Button type="submit" variant='secondary'>Cadastrar</Button>

                </Form>
            </div >
        </Container >
    )
}