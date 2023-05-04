import './bela.css'
import hidratante from '../imagens/hidratante.png'
import { Link } from 'react-router-dom'
export default function Hidratante() {
    return (

        <div className='base'>
            <img src={hidratante} alt="Hidratante" />
            <h4>Loção Hidratante Desodorante Corporal Lyra 150ml</h4>

            Loção Hidratante Desodorante Corporal Lyra é como um valor de uma joia!
            Eudora se inspirou no mundo das joalherias para trazer em um frasco valioso uma fragrância exuberante,
            uma combinação única de frutas vermelhas e flores intensas com a cremosidade do musk e cedro.
            O Hidratante Desodorante Corporal Lyra proporciona hidratação por até 48 horas. Sua fórmula de rápida absorção deixa a pele macia,
            perfumada e protegida. Um verdadeiro ícone de brilho que desperta emoções e cria memórias preciosas.
            <h1>
                R$ 46,99
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}









