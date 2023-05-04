
import './baby.css'
import Sabao from '../imagens/Sabonet Liquido.webp'
import { Link } from 'react-router-dom'
export default function kitAzul(){
    return(
        <div className="baby">
            <img src={Sabao} alt="Shampoo" />
                    <h4>Sabonete Líquido JOHNSON'S 400ml</h4>
            <br />
                    
                    O Sabonete Líquido JOHNSON'S® de Glicerina possui uma fórmula com tecnologia micelar, que traz o equilíbrio ideal
                     entre a suavidade que 
                    a pele do bebê precisa e a limpeza que você espera, protegendo a barreira natural da pele e evitando o ressecamento.
            <h1>
                R$ 29,90
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}