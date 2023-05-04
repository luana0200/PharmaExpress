import './HP.css'
import absorvente from '../imagens H/absorvente.webp'
import { Link } from 'react-router-dom'
export default function Absorvente() {
    return (

        <div className="pessoal">
            <img width="220px" src={absorvente} alt="absorvente" />
            <h4> Absorvente 32 unidades   </h4> <br />

            Se o seu fluxo é intenso e você está sempre com medo de vazamentos, o absorvente Intimus® Noturno cobertura Seca é simplesmente perfeito.
            Além de ter uma alta absorção, ele é um pouco mais longo, garantindo a segurança a noite toda.

            <h1>R$ 27,50</h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}