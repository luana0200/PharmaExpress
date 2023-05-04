import { Link } from 'react-router-dom'
import './medica.css'
import dorspan from '../imagens/dorspan.png'

export default function Dorspan() {
    return (
            <div className='medica'>
                <img src={dorspan} alt="Dorspan" />
            <h4>Escopolamina + Dipirona - Dorspan Composto Gotas 20ml Ems</h4><br />
            
            Dorspan® Composto é indicado como analgésico e antiespasmódico, em estados
            espásticos dolorosos e cólicas do trato gastrintestinal, das vias biliares e urinárias, e do
            aparelho genital feminino; dismenorreia.
            <h1>
                R$ 16,09
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}