import { Link } from 'react-router-dom'
import './medica.css'
import fendizoato from '../imagens/fendizoato.png'

export default function Fendizoato() {
    return (
            <div className='medica'>
                <img src={fendizoato} alt="Fendizoato" />
            <h4>Fendizoato De Cloperastina 3,54mg/ml Xarope 120ml + Copo Do Sador Ems Genéricoems</h4><br />
            Fendizoato de cloperastina 3,54mg é um medicamento. Seu uso pode trazer riscos.
            Procure um médico ou um farmacêutico. Leia a bula..
            Medicamentos podem causar efeitos indesejados. Evite a automedicação: informe-se com o farmacêutico.
            <h1>
            R$ 17,00
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}