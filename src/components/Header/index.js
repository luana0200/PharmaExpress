import { Link } from 'react-router-dom'
import './header.css'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import logo from './imagens/logo1.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';


export default function Header() {
    return (
        <Container>

            <div className='Container llog'>
            <Row>
                <Navbar bg="light" expand="lg" >
                    <img src={logo} />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" id='Row' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="Container button">
                            <Nav.Link href="/"><Button variant="secondary">🏠 </Button></Nav.Link>
                            <Nav.Link href="/Baby"><Button variant="secondary" >Baby</Button ></Nav.Link>
                            <Nav.Link href="/HPessoal"><Button variant="secondary" >Higiene Pessoal</Button ></Nav.Link>
                            <Nav.Link href="/Medicamentos"><Button variant="secondary"> Medicamentos</Button ></Nav.Link>
                            <Nav.Link href="/Beleza"><Button variant="secondary" >Beleza</Button ></Nav.Link>
                            <Nav.Link href="/Cadastro"><Button variant="secondary" >Cadastro</Button ></Nav.Link>
                            <Nav.Link href="/Carrinh"><Button variant="secondary">🛒 </Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Row>

            </div>
        </Container>

    )
}


