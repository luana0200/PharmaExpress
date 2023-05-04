import './bela.css'
import esmaltevermelho from '../imagens/esmaltevermelho.png'
import { Link } from 'react-router-dom'
export default function EsmalteVermelho() {
    return (

        <div className='base'>
            <img src={esmaltevermelho} alt="EsmalteVermelho" />
            <h4>Esmalte Glam Vermelho7ml</h4>

            Esmalte Glam de Eudora possui pigmentos que promovem alta intensidade de cor e brilho.
            Sua fórmula 9 free, hipoalergênica, possui longa duração e ultracobertura, é resistente a lascas, não forma bolinhas e não amassa.O excepcional pincel Big Brush com suas 500 cerdas possui formato anatômico que facilita a aplicação, promovendo a esmaltação mais rápida,
            sem falhas e proporcionando máxima cobertura.
            <h1>
                R$ 14,99
            </h1> <br />
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}