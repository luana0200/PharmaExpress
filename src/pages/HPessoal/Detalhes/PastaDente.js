import './HP.css'
import pasta from '../imagens H/pasta de dente C.jpeg'
import { Link } from 'react-router-dom'
export default function PastaDente(){
    return(
        <div className="pessoal">
            <img width="220px" src={pasta} alt="pasta" />

            <h4> Pasta de Dente Colgate 90 g </h4><br/>
            O que acontece é que a limpeza remove placas bacterianas, tártaro e algumas manchas que ofuscam o brilho natural de seus dentes.
            Após a limpeza, você percebe, sim, seus dentes mais claros, mas não tão brancos como após um clareamento dental.

            <h1> R$ 13,90 </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}