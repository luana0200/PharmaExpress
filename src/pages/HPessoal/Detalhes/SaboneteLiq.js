import './HP.css'
import saboneteliq from '../imagens H/sabonete liq.png'
import { Link } from 'react-router-dom'
export default function SaboneteLiq() {
    return (
        <div className="pessoal">
            <img width="220px" src={saboneteliq} alt="sabonete liq" />
            <h4> Sabonete Liquido Lux 200ml</h4><br />
            O Sabonete Lux Botanicals hidrata profundamente, deixando a pele bonita,
            radiante e suavemente perfumada. Sua fórmula com Óleo Hidrafloral proporciona uma pele protegida do ressecamento
            e danos do dia- a-dia, deixando uma leve fragrância em sua pele. Explosão de fragrâncias inspiradas na natureza.

            <h1>R$7,64</h1>

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}