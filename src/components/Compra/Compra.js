import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './compra.css'

import { IMaskInput } from 'react-imask';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";



export default function Compra() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <Container fluid>
            <div className='compra'>
                <div>
                    <b>Já sou cliente</b>
                    <p>Faça o login para acelerar a compra:</p>
                    <Form.Group className="mb-1">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            placeholder="Digite seu E-mail"
                        />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Digite sua Senha"
                        />
                    </Form.Group>
                    <br /><Link to='/Carrinho'><Button variant="secondary">Login</Button> </Link>
                </div>

                <div className='comprar'>
                    <b>Ainda não sou cliente</b>
                    <p>Cadastre-se para finalizar sua compra.</p>
                    <Link to='/Cadastro'><Button variant="secondary">Cadastre-se</Button></Link>
                </div>

            </div>

        </Container>

    )

}