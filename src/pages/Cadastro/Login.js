import './estilo.css'

import { IMaskInput } from 'react-imask'
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/esm/Button"
import { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/apiBack'

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function loginUser(e) {
        e.preventDefault()
        if (!email || !senha) {
            toast.warn('Existem Campos em Branco')
            return
        }
        try {
            await api.post('/Login', {
                email, senha
            })
            toast.success('Login Efetuado com Sucesso')
            // console.log(response)
        } catch (err) {
            toast.error(err.response.data.error)
        }
    }

    return (

        <Container fluid>
            <div className='cabecalho' ><h1>CADASTRO</h1></div>
            <Form onSubmit={loginUser}>
                <div className="comprar" >
                    <br />
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            placeholder="Digite seu nome"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            type="password"
                            placeholder="Digite sua Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </Form.Group>
                    <p>   <Button type="submit" variant='secondary' >Enviar</Button></p>
                </div>


            </Form>
        </Container>
    )
}