import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <div className='container-fluid'>
            <div className='row'>

                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <a class="navbar-brand"> <Link to='/'><button></button></Link></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link" ><button><Link to='/'>🏠</Link><br /> </button></a>
                                <a class="nav-link"><button ><Link to='/Baby'>Baby</Link><br /></button></a>
                                <a class="nav-link" ><button ><Link to='/HPessoal'>Higiene Pessoal</Link><br /></button></a>
                                <a class="nav-link" ><button > <Link to='/Medicamentos'>Medicamentos</Link><br /></button></a>
                                <a class="nav-link"> <button > <Link to='/Beleza'>Beleza</Link><br /></button></a>
                                <a class="nav-link" ><button ><Link to='Cadastro'>Cadastro</Link><br /></button></a>
                                <a class="nav-link">  <button ><Link to='Carrinho'> 🛒 </Link><br /></button></a>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div >



    )

}


