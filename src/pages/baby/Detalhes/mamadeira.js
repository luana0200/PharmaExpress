import './baby.css'
import mama from '../imagens/mama azul.webp'
import { Link } from 'react-router-dom'

export default function MamaRosa(){
    return(
        <div className="baby">
            <img src={mama} alt="mama" />
                    <h4>Mamadeira Azul 20ml</h4><br/>
                  
            <h1>
                R$ 10,90
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}