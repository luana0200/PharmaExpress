import './baby.css'
import { Link } from 'react-router-dom'
import Sabonete from '../imagens/sbonete barra.webp'

export default function Baseultra(){
    return(
       <div className="baby">
            <img src={Sabonete} alt="sabonete" />
                    <h4>Sabonete em Barra Johnson</h4><br />
                    O Sabonete JOHNSON'S® em Barra Original é enriquecido com hidratante que evita o ressecamento e é suave e delicado o suficiente para ser usado no corpo e rosto do bebê.

            <h1>
               R$ 6,99
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
      </div>
    )
}