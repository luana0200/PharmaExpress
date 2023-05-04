import { Link } from 'react-router-dom'
import './medica.css'
import suplevit from '../imagens/suplevit.png'

export default function Suplevit() {
    return (
            <div className='medica'>
                <img src={suplevit} alt="Suplevit" />
            <h4>Suplevit Cabelos E Unhas Com 30 Cápsulas Ems</h4><br />

            É um suplemento alimentar enriquecido com vitaminas
            e minerais essenciais para a saúde feminina, contribuindo para
            a manutenção da pele, unha, cabelos e da saúde como um todo.
            <h1>
                R$ 25,90
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}