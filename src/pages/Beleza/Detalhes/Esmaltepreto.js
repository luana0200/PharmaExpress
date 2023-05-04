import './bela.css'
import esmaltepreto from '../imagens/esmaltepreto.png'
import { Link } from 'react-router-dom'
export default function EsmaltePreto() {
    return (

        <div className='base'>
            <img src={esmaltepreto} alt="EsmaltePreto" />
            <h4>Esmalte Glam Preto 7ml</h4>
            Sua fórmula 9 free, hipoalergênica, possui longa duração e ultracobertura, é resistente a lascas, não forma bolinhas e não amassa.
            O excepcional pincel Big Brush com suas 500 cerdas possui formato anatômico que facilita a aplicação, promovendo a esmaltação mais rápida,
            sem falhas e proporcionando máxima cobertura.

            <h1>
                R$ 14,99
            </h1> <br />
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}