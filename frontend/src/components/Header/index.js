import './header.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsCart2 } from 'react-icons/bs'
import { LiaHomeSolid } from 'react-icons/lia'
import { IoExitOutline, IoPersonOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'


import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import logo from './imagens/logo1.png'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import api from '../../services/apiBack'
import ListarCategoria from '../../pages/Listar'

export default function Header() {

    const navigation = useNavigate()
    const [categorias, setCategorias] = useState([''])
    const [idCategoria, setIdCategoria] = useState('')
    const [id, setId] = useState('')
    const [busca, setBusca] = useState('')


    function handleSair() {
        localStorage.removeItem('@phlogin2k23')
        navigation('/')
    }

    useEffect(() => {
        async function listarCategorias() {
            const resposta = await api.get('/ListarCategorias')
            setCategorias(resposta.data) // retorna oq esta dentro de DATA
        }
        listarCategorias()
    }, [])

    async function handleCategoria(e) {
        e.preventDefault()
         await api.post('/ListarCategoriasUnico', {
            where: {
                idCategoria: id
            }
        })
        console.log(idCategoria)
        navigation('/ListarCategorias')
        
    }


    return (
        <Container fluid>
            <Navbar expand='xxl' className='nave'>
                <Container fluid className='dark'>

                    <search>

                        <input
                            type='Search'
                            placeholder='Pesquise...'
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                        />
                    </search>



                    <Link to='/'><img src={logo} alt='logo' /></Link>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' id='Row' />
                    <Nav className='Container Menu' >

                        <Navbar.Collapse id='basic-navbar-nav'>
                            <select
                                value={idCategoria}
                                onChange={(e) => setIdCategoria(e.target.value)}
                                onSubmit={handleCategoria}>

                                <option>Selecione...</option>
                                {categorias.map((item) => { //mapear os seus itens
                                    return (
                                        <option value={item.id} key={item.id} onClick={handleCategoria} >{item.name}</option>
                                    )
                                })}
                            </select>
                            <Nav className='Container button' >
                                {/* 
                                <Nav.Link href='/Baby'><Button variant='secondary' >Baby</Button ></Nav.Link>
                                <Nav.Link href='/HPessoal'><Button variant='secondary' >Higiene Pessoal</Button ></Nav.Link>
                                <Nav.Link href='/Medicamentos'><Button variant='secondary'> Medicamentos</Button ></Nav.Link> */}

                                {/* <Nav.Link href='/Beleza'><Button variant='secondary' >Beleza</Button ></Nav.Link> */}
                                <Nav className='test'>
                                    <Nav.Link href='/Cadastro'><IoPersonOutline size='1.5rem' color='white' /></Nav.Link>
                                    <Nav.Link href='/Carrinho'><BsCart2 size='1.5rem' color='white' /> </Nav.Link>
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


