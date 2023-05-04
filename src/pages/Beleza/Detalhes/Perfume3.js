import './bela.css'
import perfume3 from '../imagens/perfume3.png'
import { Link } from 'react-router-dom'
export default function Perfume() {
    return (
        <div className='base'>
            <img src={perfume3} alt="Perfume3" />
            <h4>La Victorie Eau de Parfum 75ml</h4>

            La Victorie Intense Eau de Parfum é a nova fragrância de Eudora, que apresenta um novo floral amadeirado cremoso, 
            intenso e sofisticado. La Victorie Intense traz a explosão de felicidade da pimenta rosa, a intensidade da tuberosa 
            e a sofisticação das madeiras quentes. Uma combinação explosiva que reflete a felicidade de viver intensamente cada momento.
            A tuberosa, sofisticada flor de contrastes e singularidades, exala feminilidade durante o dia e ao entardecer, desvenda uma fragrância intensa e inebriante floral.
            Viva intensamente a felicidade de cada momento com La Victorie Intense.
            <h1>
                R$ 188,99
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}












