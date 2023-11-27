import './header.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BsCart2 } from 'react-icons/bs'
import { LiaHomeSolid } from 'react-icons/lia'
import { IoExitOutline, IoPersonOutline } from 'react-icons/io5'

import logo from './imagens/logo1.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import api from '../../services/apiBack'

export default function Header() {
    const navigation = useNavigate()
    const [categorias, setCategorias] = useState([''])
    const [idCategoria, setIdCategoria] = useState('')


    function handleSair() {
        localStorage.removeItem('@phlogin2k23')
        navigation('/')
    }

    useEffect(() => {
        async function listarCategorias() {
            try {
                const resposta = await api.get('/ListarCategorias')
                setCategorias(resposta.data)
            } catch (erro) {
                console.error('Erro ao listar categorias:', erro)
            }
        }
        listarCategorias()
    }, [])


    async function handleCategoria(e) {
        e.preventDefault()
        try {
            const resposta = await api.get(`/ListarCategoriasUnico/${idCategoria}`)
            navigation('/Produtos', resposta)
        } catch (erro) {
            console.error('Erro de categoria:', erro)
        }
    }

    return (
        <Container fluid>
            <Navbar expand='xxl' className='nave'>
                <Container fluid className='dark'>
                    <Link to='/'><img src={logo} alt='logo' /></Link>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' id='Row' />
                    <Nav className='Container Menu' >

                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Button variant='secondary'>
                                <select
                                    value={idCategoria}
                                    onChange={(e) => setIdCategoria(e.target.value)}
                                    onBlur={handleCategoria}>

                                    <option>Selecione...</option>
                                    {categorias.map((item) => { //mapear os seus itens
                                        return (
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        )
                                    })}
                                </select>
                            </Button>
                            <Nav className='Container button' >
                                {/* <Nav.Link href='/Produtos'><Button variant='secondary' >Produtos</Button ></Nav.Link> */}
                                <Nav className='test'>
                                    <Nav.Link href='/Cadastro'><IoPersonOutline size='1.5rem' color='white' /></Nav.Link>
                                    {/* <Nav.Link href='/Carrinho'><BsCart2 size='1.5rem' color='white' /> </Nav.Link> */}
                                    <Nav.Link href='/'><LiaHomeSolid size='1.5rem' color='white' /></Nav.Link>
                                    <Nav.Link onClick={handleSair}><IoExitOutline size='1.5rem' color='white' /></Nav.Link>


                                </Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar >
        </Container >


    )
}