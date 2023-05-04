import { Link } from 'react-router-dom'
import './medica.css'
import condres from '../imagens/condres.png'

export default function Condres() {
    return (
            <div className='medica'>
                <img src={condres} alt="Condres" />
            <h4>Condres Colágeno 90 cápsulas EMS</h4><br />
            Condres colágeno não hidrolisado
            Tipo ii - 90 cápsulas
            Colágeno tipo ii não hidrolisado em cápsulas.
            Uso adulto.
            Zero açúcar e zero glúten
            Se persistirem os sintomas, o médico deverá ser consultado.
            <h1>
                R$ 211,52
            </h1>

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link> 

        </div>
    )
}
