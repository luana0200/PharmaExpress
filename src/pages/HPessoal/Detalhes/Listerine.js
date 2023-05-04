import './HP.css'
import listerine from '../imagens H/listerine.webp'

import { Link } from 'react-router-dom'
export default function Listerine(){
    return(
        <div className="pessoal">
            <img width="220px" src={listerine} alt="listerine" />

            <h4> Listerine 500 ml </h4><br/>
            Fórmula exclusiva com agentes antibacterianos que eliminam até 99,9% dos germes que causam mau hálito, placa e gengivite. 
            Faça bochechos com 20 mL por 30 segundos 2x ao dia após escovação e uso de fio dental. NÃO DILUIR. 
            Manter fora do alcance de crianças.
            <h1> R$ 20,17 </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}