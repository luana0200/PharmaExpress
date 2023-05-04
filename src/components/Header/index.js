import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <div className='container-fluid'>
            <div className='row'>

                <div className="containerArea-cabecalho">


                    <div className='col-4 , col-sm-4 , col-md-3 , col-lg-2 , img-fluid'>
                        <div className='botao2'>
                            <Link to='/'><button></button></Link>
                        </div>
                    </div>

                    <div className='col-6 , col-6 , col-6, col-6 , col-6, col-6, col-6'>

                        {/* <div className='containerCorpo'> */}
                            <button><Link to='/'>🏠</Link><br /> </button>
                            <button ><Link to='/Baby'>Baby</Link><br /></button>
                            <button ><Link to='/HPessoal'>Higiene Pessoal</Link><br /></button>
                            <button><Link to='/Medicamentos'>Medicamentos</Link><br /></button>
                            <button ><Link to='/Beleza'>Beleza</Link><br /></button>
                            <button ><Link to='Cadastro'>Cadastro</Link><br /></button>
                            <button ><Link to='Carrinho'> 🛒 </Link><br /></button>
                        {/* </div> */}
                    </div>

                </div>
            </div>

        </div>
    )

}


