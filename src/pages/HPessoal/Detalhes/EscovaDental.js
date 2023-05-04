import './HP.css'
import escova from '../imagens H/escova de dente.webp'

import { Link } from 'react-router-dom'
export default function EscovaDental(){
    return(
        <div className="pessoal">
            <img width="220px" src={escova} alt="escova de dente" />
            <h4> Escova Dental 2 unidades </h4>

            <h1>  R$ 13,50 </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}