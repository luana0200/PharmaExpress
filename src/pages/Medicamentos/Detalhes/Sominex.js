import { Link } from 'react-router-dom'
import './medica.css'
import sominex from '../imagens/sominex.png'

export default function Sominex() {
    return (
            <div className='medica'>
                <img src={sominex} alt="Sominex" />
            <h4>Sominex Composto 20 Comprimidos Ansiedade E Insônia Ems</h4><br />

            Sominex Composto é um fitoterápico que auxilia nos sintomas de insônia e ansiedade, favorecendo a qualidade do sono.
            Se persistirem os sintomas, o médico deverá ser consultado.
            Evite a automedicação: informe-se com o farmacêutico.

            <h1>
                R$ 27,90
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}