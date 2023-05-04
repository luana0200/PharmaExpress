import { Link } from 'react-router-dom'
import './medica.css'
import dipirona from '../imagens/dipirona.png'

export default function Dipirona() {
    return (
            <div className='medica'>
                <img src={dipirona} alt="Dipirona" />
            <h4>Dipirona Sódica 500mg/ml Solução Gotas 10ml Ems Genérico Ems</h4><br />
            A Dipirona é indicada para combater a febre, baixar a temperatura do corpo e
            aliviar a dor.
            <h1>
                R$ 5,09
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}