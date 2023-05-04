import './baby.css'
import { Link } from 'react-router-dom'
import rosa from '../imagens/Rosa.webp'

export default function MamadeiraRosa(){
    return(
        <div className="baby">
            <img src={rosa} alt="Rosa" />
                    <h4> Kit Escova Rosa</h4>
                    <br/>
                    2 peças
            <h1>
                R$ 7,99
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}