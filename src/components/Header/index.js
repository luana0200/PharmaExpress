import './header.css'
import { Link } from 'react-router-dom'
import { BsCart2, BsFillHouseFill, BsPersonFill } from "react-icons/bs";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import logo from './imagens/logo1.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import apiBack from '../../services/apiBack'



export default function Header() {

    const [busca, setBusca] = useState('')

    const produtos = apiBack.get('/ListarPdtUnico', {
        data:{
            name:nome
        }

    })

    return (
        <Container fluid>
            <Navbar expand="xxl" className='nave'>
                <Container fluid className='dark'>

                    <div>

                        <input
                            type="search"
                            onChange={(e) => setBusca(e.target.value)}
                            placeholder="Pesquise" />

                        {produtos.map((produtos) => {
                            return (

                                    <div class="card">
                                        <div class="category">{produtos.nome} </div>
                                        <div class="heading">
                                            {produtos.valor}
                                        </div>

                                    </div>

                               

                            )

                        })}












                    </div>
                    <Link to='/'><img src={logo} alt='logo' /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" id='Row' />
                    <Nav className="Container Menu" >
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="Container button" >

                                <Nav.Link href="/Baby"><Button variant="secondary" >Baby</Button ></Nav.Link>
                                <Nav.Link href="/HPessoal"><Button variant="secondary" >Higiene Pessoal</Button ></Nav.Link>
                                <Nav.Link href="/Medicamentos"><Button variant="secondary"> Medicamentos</Button ></Nav.Link>
                                <Nav.Link href="/Beleza"><Button variant="secondary" >Beleza</Button ></Nav.Link>
                                <Nav className='test'>
                                    <Nav.Link href="/"><BsFillHouseFill size='1.5rem' color='white' /></Nav.Link>
                                    <Nav.Link href="/Cadastro"><BsPersonFill size='1.5rem' color='white' /></Nav.Link>
                                    <Nav.Link href="/Carrinho"><BsCart2 size='1.5rem' color='white' /> </Nav.Link>

                                </Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar >
        </Container >


    )
}


