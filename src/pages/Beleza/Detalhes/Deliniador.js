import './bela.css'
import delineador from '../imagens/delineador.png'
import { Link } from 'react-router-dom'
export default function Batom() {
    return (
        <div className='base'>
            <img src={delineador} alt="Delineador" />
            <h4>Deliniador Líquido Para Olhos Preto Essencial  2,5ml</h4>

            Delineador Líquido Para Olhos Soul oferece alta pigmentação por até 10 horas.
            Ele desliza facilmente, seca super rápido e não migra para outras áreas dos olhos.
            Além disso, é fácil de ser removido.
            Seu aplicador proporciona traçado firme, preciso e de fácil aplicação.
            <h1>
                R$ 35,99
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}







