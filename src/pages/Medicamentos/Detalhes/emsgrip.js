import { Link } from 'react-router-dom'
import './medica.css'
import emsgrip from '../imagens/emsgrip.png'

export default function Emsgrip() {
    return (
            <div className='medica'>
                <img src={emsgrip} alt="Emsgrip" />
            <h4>EMSGRIP Limão e Mel Sachê EMS</h4>

            EMSGrip Limão e Mel Sachê EMS (paracetamol) é utilizado para alívio temporário da dor de cabeça, febre e dores no corpo
            associados a gripe. Sua ação inicia-se de 15 a 30 minutos após administração oral e perdura por um período de 4 a 6 horas.
            Uso adulto e pediátrico acima de 12 anos.
            <h1>
                R$ 10,00
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}