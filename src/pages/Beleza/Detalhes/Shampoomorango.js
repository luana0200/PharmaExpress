import './bela.css'
import shampoomorango from '../imagens/shampoomorango.png'
import { Link } from 'react-router-dom'
export default function Shampoo() {
    return (
        <div className='base'>
            <img src={shampoomorango} alt="Shampoomorango" />
            <h4>Combo Frutas Vermelhas</h4>

            A escolha ideal para quem quer fios hidratados, robustos e extremamente protegidos. O Combo
            Instance Frutas Vermelhas Shampoo + Condicionador é perfeito para cabelos sensibilizados.
            Instance não possui Parabenos, Sal ou Petrolatos em sua fórmula, o que garante fios cheios de
            viço. Afinal, você merece esse carinho especial. Experimente a potência do extrato natural e do
            marcante aroma de Frutas Vermelhas.
            Este combo contém:
            01 Shampoo Instance Frutas Vermelhas, 300 ml
            01 Condicionador Instance Frutas Vermelhas, 300 ml.
            <br />
            <div className='promocao'>
                <button>PROMOÇAO 10%</button>
            </div>
            <h1>
                R$ 47,68
            </h1> <br />
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}