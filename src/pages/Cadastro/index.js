import React, { useState } from "react";
import './estilo.css'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Cadastro() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [sexo, setSexo] = useState('')
    const [cpf, setCpf] = useState('')

    function handleCadastro() {
        alert(`Nome: ${nome} \n Email: ${email} \n Senha: ${senha} \n Sexo: ${sexo} \n Cpf: ${cpf}`)
    }

    
    return (
        <Container fluid>
            <div className='cabecalho' ><h1>CADASTRO</h1></div>
            <div className="compra">
                <Form onSubmit={handleCadastro}>
                    <br />
                    <p> <label>Nome:</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} /></p>

                    <p> <label>Email:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} /></p>

                    <p>   <label>Senha</label>
                        < input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} /></p>

                    <p> <label>Genêro</label>
                        <select
                            value={sexo}
                            onChange={(e) => setSexo(e.target.value)} >
                            <option value=""></option>
                            <option value="femenino">Feminino</option>
                            <option value="masculino">Masculino</option>
                        </select></p>

                    <p>   <label>CPF:</label>
                        < input
                            type="number"
                            pattern="\d(3).\d(3).\d(3)-\d(2)"
                            // title="xxx.xxx.xxx-xx"
                            placeholder="000.000.000-00"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)} /></p>

                    <p>   <Button variant='secondary' type="submit">Enviar</Button></p>
                </Form>
            </div>
        </Container>
    )
}


export default Cadastro