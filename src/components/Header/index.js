import './header.css'
import { Link } from 'react-router-dom'
import { BsCart2,BsFillHouseFill } from "react-icons/bs";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import logo from './imagens/logo1.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (

        <Container fluid>
            <Navbar expand="xxl" className='nave'>
                <Container fluid className='dark'>
                    <Link to='/'><img src={logo} alt='logo' /></Link>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" id='Row'  />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <div className='center'> */}
                        <Nav className="Container button" >
                            <Nav>
                            <Nav.Link href="/"><Button variant="secondary"><BsFillHouseFill size='1.5rem' color='black'
                            /></Button></Nav.Link>
                            </Nav>

                            <Nav.Link href="/Baby"><Button variant="secondary" >Baby</Button ></Nav.Link>
                            <Nav.Link href="/HPessoal"><Button variant="secondary" >Higiene Pessoal</Button ></Nav.Link>
                            <Nav.Link href="/Medicamentos"><Button variant="secondary"> Medicamentos</Button ></Nav.Link>
                            <Nav.Link href="/Beleza"><Button variant="secondary" >Beleza</Button ></Nav.Link>
                            <Nav.Link href="/Cadastro"><Button variant="secondary" >Cadastro</Button ></Nav.Link>
                            <Nav.Link href="/Carrinho"><Button variant="secondary">< BsCart2 size='1.5rem' color='white'/> </Button></Nav.Link>
                        </Nav>
                        {/* </div> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>


    )
}


