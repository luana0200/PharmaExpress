import './bela.css'
import esmaltebranco from '../imagens/esmaltebranco.png'
import { Link } from 'react-router-dom'
export default function EsmalteBranco() {
    return (

        <div className='base'>
            <img src={esmaltebranco} alt="EsmalteBranco" />
            <h4>Esmalte Glam Branco 7ml</h4>

            Esmalte Glam de Eudora possui pigmentos que promovem alta intensidade de cor e brilho.
            Sua fórmula 9 free, hipoalergênica, possui longa duração e ultracobertura, é resistente a lascas,
            não forma bolinhas e não amassa. O excepcional pincel Big Brush com suas 500 cerdas possui formato
            anatômico que facilita a aplicação, promovendo a esmaltação mais rápida, sem falhas e proporcionando máxima cobertura.

            <h1>
                R$ 14,99
            </h1> <br />
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}