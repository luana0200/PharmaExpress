import './bela.css'
import gelsecativo from '../imagens/gelsecativo.png'
import { Link } from 'react-router-dom'
export default function Gelsecativo() {
    return (

        <div className='base'>
            <img src={gelsecativo} alt="Gelsecativo" />
            <h4>Gel Secativo Pele com AcneAção Rápida 15g</h4>

            Você tem espinhas que insistem em permanecer em seu rosto?O Gel Secativo Pele com Acne Ação Rápida 
            Neo Essens de Eudora, vai te ajudar.​Benefícios:Atua na remoção da acne;Reduz a oleosidade;Uniformiza o tom da pele.

            <h1>
                R$ 32,99
            </h1> <br />
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}