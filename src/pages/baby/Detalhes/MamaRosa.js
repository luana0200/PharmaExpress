import './baby.css'
import Mamadeira from '../imagens/Mamadeira Rosa.jpg'
import { Link } from 'react-router-dom'

export default function MamaRosa(){
    return(
        <div className="baby">
            <img src={Mamadeira} alt="Mamadeira" />
                    <h4>Mamadeira Rosa 20ml</h4><br/>
                
            <h1>
                R$ 10,90
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}