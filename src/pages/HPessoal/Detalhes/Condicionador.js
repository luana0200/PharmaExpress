import './HP.css'
import condicionado from '../imagens H/Condicionador.webp'
import { Link } from 'react-router-dom'

export default function Condicionador() {
    return (
        <div className="pessoal">
            <img width="220px" src={condicionado} alt="Condicionador" />

            <h4> Condicionador Pantene 400ml </h4><br />
            As ampolas da Pantene possuem tecnologias inteligentes para ajudar a identificar áreas
            danificadas do cabelo e hidratar,reconstruir ou nutrir.
            Agora você pode adicionar esses tratamentos ao seu cronograma capilar,
            até que seus cabelos alcancem a aparência e textura ideais.

            <h2>
                R$ 27,90
            </h2>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}