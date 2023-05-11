import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import '../Header/header.css'
import './compra.css'
import { IMaskInput } from 'react-imask';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button'

export default function Compra() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    return (
        <Container fluid>
            <div className='comprando'>

                <b>Já sou cliente</b>
                <p>Faça o login para acelerar a compra:</p>

                <Form.Group className="comprinha">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        as={IMaskInput}

                        placeholder="Digite seu E-mail"
                    />
                </Form.Group>

                <Form.Group className="comprinha">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Digite sua Senha"
                    />
                </Form.Group><br />

                <Button variant='secondary' type="submit">Enviar</Button>

                <Form.Group className='cadastrando'>
                    <b>Ainda não sou cliente</b>
                    <p>Cadastre-se para finalizar sua compra.</p>
                </Form.Group>

                <Link to='/Cadastro'><Button variant='secondary' type="submit">Cadastre-se</Button></Link>

            </div>
        </Container>
    )
}