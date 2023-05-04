import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <div className="containerArea-cabecalho">
            <div className='botao2'>
                <Link to='/'><button></button></Link>
            </div>
            <div className='containerCorpo'>
              <button><Link to='/'>🏠</Link><br /> </button>
                <button ><Link to='/Baby'>Baby</Link><br /></button>
                <button ><Link to='/HPessoal'>Higiene Pessoal</Link><br /></button>
                <button><Link to='/Medicamentos'>Medicamentos</Link><br /></button>
                <button ><Link to='/Beleza'>Beleza</Link><br /></button>
                <button ><Link to='Cadastro'>Cadastro</Link><br /></button>
                <button ><Link to='Carrinho'> 🛒 </Link><br /></button>
            </div>

        </div>

    )

}


