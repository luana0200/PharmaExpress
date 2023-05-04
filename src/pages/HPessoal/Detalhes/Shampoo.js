import './HP.css'
import shampoo from '../imagens H/shampoo.webp'
import { Link } from 'react-router-dom'

export default function Shampoo() {
    return (
        <div className="pessoal">
            <img width="220px" src={shampoo} alt="shampoo" />
            <h4> Shampoo Pantene 450 ml</h4><br />
                hidratar e fortalecer os fios instantaneamente, sem comprometer os resultados dos tratamentos realizados. 
                É ideal para cabelos que passaram por tratamentos químicos que causam danos à estrutura protetora do cabelo,
                como ressecamento e quebra. Possui uma fórmula avançada com Pro-Vitaminas que ajudam a reparar,

            <h1>
                R$ 21,99
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}