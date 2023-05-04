import './baby.css'
import { Link } from 'react-router-dom'
import Lenco2 from '../imagens/lenco humidecido.png'

export default function Aptamil(){
    return(
        <div className="baby">
              <img width="110px" src={Lenco2} alt="Lenco" />
              <h4>Lenço Umidecido  Pampers 48 unidade</h4><br/>
            Outra ótima opção para as peles delicadas dos recém-nascidos é o Lenço Umedecido Recém Nascido sem Fragrância da Johnson's, 
            que é hipoalergênico,
             sem fragrância e sem parabenos e álcool, tornando-se um dos mais recomendados para uso desde os primeiros dias de vida.

                   
            <h1>
                R$ 29,90
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}