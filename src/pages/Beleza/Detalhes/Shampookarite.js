import './bela.css'
import shampookarite from '../imagens/shampookarite.png'
import { Link } from 'react-router-dom'
export default function Shampoo() {
    return (
        <div className='base'>
            <img src={shampookarite} alt="Shampookarite" />
            <h4>Combo Karité</h4>

            Sabemos que o cabelo é nosso cartão-postal. Por isso, nada mais essencial do que o momento
            de cuidar dos fios. Combo Instance Karité vem com o shampoo e condicionador da linha,
            proporcionando limpeza e maciez.
            crescimento e fortalecimento do fio, evitando quebra. Entregando cabelos mais fortes e macios,
            com um crescimento natural e mega saudável.
            Este combo contém:
            01 Shampoo Instance Karité, 300 ml
            01 Condicionador Instance Karité, 300 ml
            <h1>
                R$ 52,98
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}