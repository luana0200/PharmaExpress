import './estilo.css'
import { useNavigate } from 'react-router-dom'

import { IMaskInput } from 'react-imask'
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/esm/Button"
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/apiBack'

export default function Login() {

    const navigation = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const iToken = localStorage.getItem('@phlogin2k23')
    const token = JSON.parse(iToken)

    useEffect(() => {
        if (!token) {
            navigation('/Login')
            return
        } else if (token) {
            async function verificarToken() {
                const resulta = await api.get('/ListarUsuarioToken', {
                    headers: {
                        Authorization: 'Bearer ' + `${token}`
                    }
                })
                console.log(resulta)
            }
            verificarToken()
        }
    }, [])

    async function loginUser(e) {
        e.preventDefault()
        try {
            if (!email || !senha) {
                toast.warn('Existem Campos em Branco')
                // return
            }
            const result = await api.post('/Login', {
                email,
                senha
            })

            if (result.data.id) {
                const token = result.data.token
                localStorage.setItem('@phlogin2k23', JSON.stringify(token))
                // console.log(token)
            }
        } catch (err) {
            toast.error(err.response.data.error)
        }
        navigation('/')
    }

    return (

        <Container fluid>
            <div className='cabecalho' ><h1>CADASTRO</h1></div>
            <div className="compra">
                <Form onSubmit={loginUser}>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            placeholder="Digite seu Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            type="password"
                            placeholder="Digite sua Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </Form.Group>
                    <br/>
                    <Button type="submit" variant='secondary' >Enviar</Button>
                </Form>
            </div>
        </Container >
    )
}