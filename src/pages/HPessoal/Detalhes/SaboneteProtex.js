import './HP.css'
import sabonete from '../imagens H/sabonete protex.webp'
import { Link } from 'react-router-dom'
export default function SaboneteProtex(){
    return(
        <div className="pessoal">
            <img width="220px" src={sabonete} alt="sabonete" />

            <h4>Sabonete Protex em Barra 85 g</h4>
            Sabonete em barra antibacteriano Protex® Limpeza profunda, remove gordura e impurezas dos poros para uma pele saudável. 
            Oferece proteção antibacteriana natural com óleo de linhaça. 
            Elimina 99,9% das bactérias mantendo você protegido ao longo do dia.
            <h1>
                R$ 5,87
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}