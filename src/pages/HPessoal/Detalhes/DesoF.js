import './HP.css'
import desoF from '../imagens H/desoF.webp'
import { Link } from 'react-router-dom'

export default function DesoF(){
    return(
        <div className="pessoal">
            <img width="220px" src={desoF} alt="desodorante" />
            <h4>Desodorante Rexona Fem 200 ml</h4><br />

            <h1>R$ 16,99</h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}