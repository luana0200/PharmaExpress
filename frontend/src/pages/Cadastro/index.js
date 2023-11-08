import './estilo.css'
import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/esm/Button"
import api from '../../services/apiBack'


export default function Cadastro() {

     const navigation = useNavigate()
    const [name, setName] = useState('')
    const [dateN, setDateN] = useState('')
    const [cpf_cnpj, setCpf_cnpj] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordC, setPasswordC] = useState('')

    async function cadastraUsuario(e) {
        e.preventDefault()
        try {
            if (name === '' || dateN === '' || cpf_cnpj === '' || email === '' || password === '') {
                toast.error('Existem Campos em Branco!')
                return
            } else if (password !== passwordC) {
                toast.warn('As senhas são diferentes')
                return
            } else if (password === passwordC) {
                const resposta = await api.post('/CriarUsuarios', {
                    name,
                    dateN,
                    cpf_cnpj,
                    email,
                    password
                })
                toast.success(resposta.data.dados)
                navigation('/')
            }
        } catch (err) {
            toast.error(err.response.data.error)
        }


        // navigation('/Baby')
    }

    return (

        <Container fluid>
            <div className='cabecalho' ><h1>CADASTRO</h1></div>
            <div className="compra" >
                <Form onSubmit={cadastraUsuario}>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            mask="00/00/0000"
                            placeholder="Digite sua Data de Nascimento"
                            value={dateN}
                            onChange={(e) => setDateN(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>CPF/CNPJ</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            mask="000.000.000-00"
                            placeholder="Digite seu CPF"
                            value={cpf_cnpj}
                            onChange={(e) => setCpf_cnpj(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            placeholder="Digite seu E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Digite sua Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Confirme sua Senha:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirme sua Senha"
                            value={passwordC}
                            onChange={(e) => setPasswordC(e.target.value)}
                        />
                    </Form.Group>
                    <p>   <Button type="submit" variant='secondary' >Enviar</Button></p>

                    <a>Faça seu Login <Link to='/Login'>AQUI</Link></a>
                </Form>
            </div>
        </Container>
    )
}