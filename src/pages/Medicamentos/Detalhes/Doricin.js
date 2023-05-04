import { Link } from 'react-router-dom'
import './medica.css'
import doricin from '../imagens/doricin.png'

export default function Doricin() {
    return (
            <div className='medica'>
                <img src={doricin} alt="Doricin" />
            <h4>Doricin Dipirona Monohidratada 300mg + Citrato De Orfenadrina 35mg + Cafeína 50mg 36 Comprimidos Ems</h4><br />
            
            Doricin é indicado no alívio da dor associada a contraturas musculares, incluindo dor de cabeça tensional.
            <h1>
                R$ 13,29
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}