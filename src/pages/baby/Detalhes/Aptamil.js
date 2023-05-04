import './baby.css'
import { Link } from 'react-router-dom'
import aptamil from '../imagens/Formula Aptamil.webp'

export default function Aptamil(){
    return(
        <div className="baby">
              <img width="10px" src={aptamil} alt="Aptamil" />
                    <h4 >Formula Aptamil 1800 g</h4><br />
                    Aptamil Premium 1 é uma fórmula infantil de partida, indicada para alimentação de bebês 
                    lactentes desde o nascimento até o 6º mês de vida, adicionada de prebióticos.
                    O produto contém proteínas lácteas, ácidos graxos poli-insaturados de cadeia longa (DHA e ARA), prebióticos, nucleotídeos e taurina.
                    <br/>
            <h1>
                R$ 49,90
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}