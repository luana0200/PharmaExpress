import './baby.css'
import kit from '../imagens/Kit Escova Azul.jpg'
import { Link } from 'react-router-dom'

export default function kitAzul(){
    return(
        <div className="baby">
            <img src={kit} alt="Kit Azul" />
            <h4> Kit Escova Azul</h4><br />
                    <h4>2 peças</h4>
                    <br/>
            <h1>
                R$ 7,99
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}