import { Link } from 'react-router-dom'
import './medica.css'
import ibuprofeno from '../imagens/ibuprofeno.png'

export default function Ibuprofeno() {
    return (
            <div className='medica'>
                <img src={ibuprofeno} alt="ibuprofeno" />
            <h4>Ibuprofeno 200mg 20 Comprimidos Ems</h4><br />
            
            Ibuprofeno é um medicamento indicado para redução da febre e para o alívio de dores, tais como:
            dores decorrentes de gripes e resfriados, dor de garganta, dor de cabeça, dor de dente, dor nas costas,
            cólicas menstruais e dores musculares.
            Procure um médico ou um farmacêutico. Leia a bula.
            Medicamentos podem causar efeitos indesejados. Evite a automedicação: informe-se com o farmacêutico.
            <h1>
                R$ 12,58
            </h1> <br />

              <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}