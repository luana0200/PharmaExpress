import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import '../Header/header.css'
import './compra.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


export default function Compra() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <Container fluid>
            <div className='compra'>
                <div>
                    <b>Já sou cliente</b>
                    <p>Faça o login para acelerar a compra:</p>
                    <label>E-mail</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><p />

                    <label>Senha</label>
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} /> <br />
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