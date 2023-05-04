import './baby.css'
import { Link } from 'react-router-dom'
import ShampooJonhson from '../imagens/ShampooJonhson.webp'

export default function kitAzul() {
    return (
        <div className="baby">
            <img src={ShampooJonhson} alt="Shampoo" />
            <h4> Johnson's Baby 200ml</h4>
            <br />
            Johnson's Baby ajuda a realçar a beleza dos cabelos claros, além de limpar suavemente,
            sem agredir o couro cabeludo do bebê.

            <h1>
                R$ 49,90
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}