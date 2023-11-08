import './header.css'
import { Link } from 'react-router-dom'
import { BsCart2, BsFillHouseFill, BsPersonFill } from "react-icons/bs";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import logo from './imagens/logo1.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import apiBack from '../../services/apiBack'
import React, { useEffect, useState } from 'react';

export default function Header() {
    const [data, setData] = useState([]);
      
    useEffect(() => {
      const fetchData = async () => {
        const result = await apiBack.get('listarCategorias');
  
        setData(result.data);
      };
  
      fetchData();
    }, []);
    return (
        <Container fluid>
            <Navbar expand="xxl" className='nave'>
                <Container fluid className='dark'>
                    <Link to='/'><img src={logo} alt='logo' /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" id='Row' />
                    <Nav className="Container Menu" >
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="Container button" >

                                {data.map((item, index) => (
                                        <Nav.Link href={item.id}><Button variant="secondary" >{item.name}</Button ></Nav.Link>
                                ))}
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


