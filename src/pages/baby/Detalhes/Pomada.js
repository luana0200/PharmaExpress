import './baby.css'
import pomada from '../imagens/Pomada.webp'
import { Link } from 'react-router-dom'

export default function Pomada() {
    return (
        <div className="baby">
           <img width="110px" src={pomada} alt="pomada" />
            <h4> Pomada Hipogloss 45 g</h4>
             <br/>
            Hipoglós é indicado para proteger a pele do bebê das assaduras. Sua composição com vitaminas A (retinol), D (colecalciferol) e óxido de
             zinco, entre outros componentes, forma uma camada de proteção
             contra as assaduras e irritações causadas principalmente pelo uso de fraldas e contato com as fezes, urina e suor.
          
            <h1>
                R$ 39,90
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}