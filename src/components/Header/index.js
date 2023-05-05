// import { Link } from 'react-router-dom'
import './header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './imagens/logo1.png'


// export default function Header() {
// return (
// <div className='container-fluid'>
//     <div className='row'>

//         <div class="container-fluid">
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//                 <a class="navbar-brand"> <Link to='/'><button></button></Link></a>
//                 <div className='header-container'>

//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 </div>
//                 <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
//                     <div class="navbar-nav">
//                         <a class="nav-link" ><button><Link to='/'>🏠</Link><br /> </button></a>
//                         <a class="nav-link"><button ><Link to='/Baby'>Baby</Link><br /></button></a>
//                         <a class="nav-link" ><button ><Link to='/HPessoal'>Higiene Pessoal</Link><br /></button></a>
//                         <a class="nav-link" ><button > <Link to='/Medicamentos'>Medicamentos</Link><br /></button></a>
//                         <a class="nav-link"> <button > <Link to='/Beleza'>Beleza</Link><br /></button></a>
//                         <a class="nav-link" ><button ><Link to='Cadastro'>Cadastro</Link><br /></button></a>
//                         <a class="nav-link">  <button ><Link to='Carrinho'> 🛒 </Link><br /></button></a>

//                     </div>
//                 </div>
//             </nav>
//         </div>
//     </div>
// </div >
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


