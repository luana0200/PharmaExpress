// import { Link } from 'react-router-dom'
import './header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './imagens/logo1.png'

export default function Header() {

    return (

        <div className='container-fluid'>
        <Navbar expand="xxl" className='nave'>
            <Container className='dark'>
                    <img src={logo} alt='logo' />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link href="/"><button>🏠</button></Nav.Link>
                        <Nav.Link href="/Baby"><button>Baby</button></Nav.Link>
                        <Nav.Link href="/HPessoal"><button>HP</button></Nav.Link>
                        <Nav.Link href="/Medicamentos"><button>Medicamentos</button></Nav.Link>
                        <Nav.Link href="/Beleza"><button>Beleza</button></Nav.Link>
                        <Nav.Link href="Cadastro"><button>Cadastro</button></Nav.Link>
                        <Nav.Link href="Carrinho"><button>🛒</button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
            </Navbar >
            </div>

        )

}



//     )

// }


