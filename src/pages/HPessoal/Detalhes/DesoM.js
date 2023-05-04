import './HP.css'
import deso from '../imagens H/deso M.webp'
import { Link } from 'react-router-dom'

export default function DesoM() {
    return (
        <div className="pessoal">
            <img width="220px" src={deso} alt="deso M" />
            <h4>
                Desodorante Rexona Masc 200 ml</h4> <br />
            <h1>R$ 16,99</h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}