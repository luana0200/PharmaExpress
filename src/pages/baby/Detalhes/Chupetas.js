import './baby.css'
import { Link } from 'react-router-dom'
import chupetas from '../imagens/Chupetas.png'

export default function Chupetas(){
    return(
        <div className="baby">
            <img src={chupetas} alt="Chupetas" />
                    <h4>Chupetas</h4><br />
                   
                  
            <h1>
                R$ 9,90
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}