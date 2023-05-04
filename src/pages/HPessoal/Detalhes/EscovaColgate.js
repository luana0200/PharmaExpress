import './HP.css'
import escovacarvao from '../imagens H/escova colgate carvao.jpg'
import { Link } from 'react-router-dom'
export default function EscovaColgate(){
    return(
        <div className="pessoal">
            <img width="220px" src={escovacarvao} alt="escova de dente" />
                <h4> Escova Dental Colgate 4 unidade  </h4>
               
                <h1> R$ 20,90</h1>
             <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}