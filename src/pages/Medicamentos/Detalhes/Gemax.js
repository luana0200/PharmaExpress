import { Link } from 'react-router-dom'
import './medica.css'
import gemax from '../imagens/gemax.png'

export default function Gelmax() {
    return (
            <div className='medica'>
                <img src={gemax} alt="gemax" />
            <h4>Gelmax Sabor Limão Ems</h4><br />
            Gelmax Suspensão 240ml é um medicamento que combate sintomas de dor,
            azia e má digestão de problemas gastrintestinais
            Procure um médico ou um farmacêutico. Leia a bula.
            Medicamentos podem causar efeitos indesejados. Evite a automedicação: informe-se com o farmacêutico.
            <h1>
                R$ 15,88
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}