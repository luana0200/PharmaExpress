import './header.css'
import { Link } from 'react-router-dom'
import { BsCart2, BsFillHouseFill, BsPersonFill } from 'react-icons/bs'
import { LiaHomeSolid} from 'react-icons/lia'
import { IoExitOutline, IoPersonOutline } from 'react-icons/io5'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import logo from './imagens/logo1.png'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


export default function Header() {
    return (

        <Container fluid>
            <Navbar expand='xxl' className='nave'>
                <Container fluid className='dark'>
                    <Link to='/'><img src={logo} alt='logo' /></Link>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' id='Row' />
                    <Nav className='Container Menu' >
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='Container button' >

                                <Nav.Link href='/Baby'><Button variant='secondary' >Baby</Button ></Nav.Link>
                                <Nav.Link href='/HPessoal'><Button variant='secondary' >Higiene Pessoal</Button ></Nav.Link>
                                <Nav.Link href='/Medicamentos'><Button variant='secondary'> Medicamentos</Button ></Nav.Link>
                                {/* <Nav.Link href='/Beleza'><Button variant='secondary' >Beleza</Button ></Nav.Link> */}
                                <Nav className='test'>
                                    <Nav.Link href='/Cadastro'><IoPersonOutline size='1.5rem' color='white' /></Nav.Link>
                                    <Nav.Link href='/Carrinho'><BsCart2 size='1.5rem' color='white' /> </Nav.Link>
                                    <Nav.Link href='/'><LiaHomeSolid size='1.5rem' color='white' /></Nav.Link>
                                    <Nav.Link href='/Login'><IoExitOutline size='1.5rem' color='white' /></Nav.Link>


                                </Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar >
        </Container >


    )
}


