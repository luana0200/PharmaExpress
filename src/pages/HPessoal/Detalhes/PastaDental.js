import './HP.css'
import pastadental from '../imagens H/pasta dental.png'
import { Link } from 'react-router-dom'
export default function PastaDental(){
    return(
        <div className="pessoal">
            <img width="220px" src={pastadental} alt="pasta dental" />

            <h4> Pasta de Dente Oral-b </h4><br/>

            A nova pasta dental Oral-B 100% protege contra os problemas mais comuns: Placa, Bactéria, Hálito, Tártaro, Cáries,
            Branqueamento, Gengiva e Esmalte.

            <h1> R$ 5,69 </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}