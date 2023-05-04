import './bela.css'
import protetorsolar from '../imagens/protetorsolar.png'
import { Link } from 'react-router-dom'
export default function Perfume() {
    return (
        <div className='base'>
            <img src={protetorsolar} alt="ProtetorSolar" />
            <h4>Protetor Solar Facial FPS 50 50g</h4>

            - Hidrata profundamente;
            - Minimiza os danos causados na pele pelos raios infravermelho;
            - Previne o envelhecimento precoce;
            - Ômega 3 e 6 para efeito antipoluição que protege das agressões externas;
            - Reforça a barreira natural da pele.
            <h1>
                R$ 84,99
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}