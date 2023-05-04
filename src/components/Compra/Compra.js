import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './compra.css'

export default function Compra() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')



    return (
        <div className='compra'>
            <div>
                <b>Já sou cliente</b><br />
                <p>Faça o login para acelerar a compra:</p>
                <p><label>E-mail</label><br />
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} /></p>
                <p><label>Senha</label><br />
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} /></p> <br />
             <Link to='/Carrinho'><button>Login</button> </Link> 
            </div>
            <div>
                <b>Ainda não sou cliente</b>
                <p>Cadastre-se para finalizar sua compra.</p>
                <Link to='/Cadastro'><button>Cadastre-se</button></Link> 
            </div>
        </div>

    )
}