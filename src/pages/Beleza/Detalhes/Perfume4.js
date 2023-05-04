import './bela.css'
import perfume4 from '../imagens/perfume4.png'
import { Link } from 'react-router-dom'
export default function Perfume() {
    return (
        <div className='base'>
            <img src={perfume4} alt="Perfume4" />
            <h4>Magnific Audaz Eau de Parfum 75ml</h4>

            Eudora Magnific Audaz Eau de Parfum é um tributo à coragem e audácia das
            mulheres magníficas, que conquistam o seu espaço no mundo todos os dias.
            O seu segredo Eudora é o Jasmim do Egito, uma das flores do exclusivo acorde Flores Magníficas.
            Toda essa floralidade é associada a nuances amadeiradas, do Sândalo e Patchouli, formando um robusto
            <h1>
                R$ 209,99
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}