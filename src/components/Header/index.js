import { Link } from 'react-router-dom'
import './header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './imagens/logo1.png'

// export default function Header() {
// return (
// <div className='container-fluid'>
//     <div className='row'>

//         <div class="container-fluid">
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//                 <a class="navbar-brand"> <Link to='/'><button></button></Link></a>
//                 <div className='header-container'>

//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 </div>
//                 <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
//                     <div class="navbar-nav">
//                         <a class="nav-link" ><button><Link to='/'>🏠</Link><br /> </button></a>
//                         <a class="nav-link"><button ><Link to='/Baby'>Baby</Link><br /></button></a>
//                         <a class="nav-link" ><button ><Link to='/HPessoal'>Higiene Pessoal</Link><br /></button></a>
//                         <a class="nav-link" ><button > <Link to='/Medicamentos'>Medicamentos</Link><br /></button></a>
//                         <a class="nav-link"> <button > <Link to='/Beleza'>Beleza</Link><br /></button></a>
//                         <a class="nav-link" ><button ><Link to='Cadastro'>Cadastro</Link><br /></button></a>
//                         <a class="nav-link">  <button ><Link to='Carrinho'> 🛒 </Link><br /></button></a>

//                     </div>
//                 </div>
//             </nav>
//         </div>
//     </div>
// </div >

export default function Header() {
    return (

        <Container className='dark'>
                <Navbar expand="xxl" className='nave'>
                    <a class="botao2"> <Link to='/'><button> <img src={logo} /></button></Link></a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div class="navbar-nav">
                            <a nav-link href="/" ><button>🏠</button></a>
                            <a nav-link href="/Baby"><button >Baby</button></a>
                            <a nav-link href="/HPessoa"><button >Higiene Pessoal</button></a>
                            <a nav-link href="/Medicamentos"><button >Medicamentos</button></a>
                            <a nav-link href="/Beleza"> <button > Beleza</button></a>
                            <a nav-link href="/Cadastro"><button >Cadastro</button></a>
                            <a nav-link href="/Carrinho">  <button > 🛒 </button></a>

                        </div>
                    </Navbar.Collapse>
                </Navbar >
        </Container>

    )
}


//     )
// }