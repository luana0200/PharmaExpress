import './HP.css'
import creme from '../imagens H/creme facial.png'
import { Link } from 'react-router-dom'

export default function CremeFacial() {
    return (
        <div className="pessoal">
            <img width="220px" src={creme} alt="creme" />

            <h4> Creme Facial 100 g </h4><br />
            O NIVEA Creme tem várias aplicações e benefícios: desde queimaduras,
            à hidratação de lábios até ao cuidar da pele irritada após depilação.
            E quando lhe faltar o after sun, experimente aplicar generosamente após um dia de sol na praia.

            <h1>
                R$ 24,62
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}