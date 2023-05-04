import { Link } from 'react-router-dom'
import './medica.css'
import declofenaco from '../imagens/declofenaco.png'

export default function Declofenaco() {
    return (
            <div className='medica'>
                <img src={declofenaco} alt="Declofenaco" />
            <h4>Diclofenaco Dietilamônio 11,6mg/g Ems Gel Creme Com 60g Ems</h4><br />

            O diclofenaco dietilamônio foi indicado para aliviar a dor e reduzir os sintomas
            da inflamação como inchaço e dor.
            Se Persistirem Os Sintomas, O Médico Deverá Ser Consultado.
            Diclofenaco Dietilamonio É Um Medicamento. Seu Uso Pode
            Trazer Riscos. Procure O Médico E O Farmacêutico. Leia A Bula.
            Medicamento Genérico - Lei Nº 9.787/99.
            <h1>
                R$ 14,30
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link> 
        </div>
    )
}