import './estilo.css'
import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/esm/Button"
import api from '../../services/apiBack'


export default function Cadastro() {

    const navigation = useNavigate()
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [fornecedor, setFornecedor] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [descricao, setDescricao] = useState('')
    const [categoriasID, setCategoriasID] = useState('')

    async function cadastraUsuario(e) {
        e.preventDefault()
        try {
            if (nome === '' || preco === '' || fornecedor === '' || quantidade === '' || descricao === '') {
                toast.error('Existem Campos em Branco!')
                return
            }
        } catch (err) {
            toast.error(err.response.data.error)
        }


        // navigation('/Baby')
    }

    return (

        <Container fluid>
            <div classnome='cabecalho' ><h1>CADASTRO</h1></div>
            <div classnome="compra" >
                <Form onSubmit={cadastraUsuario}>
                    <Form.Group >
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            placeholder="Digite seu Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Valor:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            mask="00/00/0000"
                            placeholder="Digite sua Data de Nascimento"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Fornecedor:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            mask="000.000.000-00"
                            placeholder="Digite seu CPF"
                            value={fornecedor}
                            onChange={(e) => setFornecedor(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            placeholder="Digite seu E-mail"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Descrição:</Form.Label>
                        <Form.Control
                            type="descricao"
                            placeholder="Digite sua Senha"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Categoria:</Form.Label>
                        <Form.Control
                            type="descricao"
                            placeholder="Confirme sua Senha"
                            value={categoriasID}
                            onChange={(e) => setCategoriasID(e.target.value)}
                        /><br />
                    </Form.Group>
                    <Button type="submit" variant='secondary'>Cadastrar</Button>
                
                </Form>
            </div >
        </Container >
    )
}