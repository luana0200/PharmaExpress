import './bela.css'
import shampooacai from '../imagens/shampooacai.png'
import { Link } from 'react-router-dom'
export default function Shampoo() {
    return (
        <div className='base'>
            <img src={shampooacai} alt="Shampooacai" />
            <h4>Combo Açai e Bambu</h4>

            O Combo Instance Açaí e Bambu entrega um tratamento ideal para garantir fios longos, macios,
            saudáveis e mega hidratados.
            A linha Instance Açaí e Bambu é formulada com ingredientes naturais que auxiliam no
            crescimento e fortalecimento do fio, evitando quebra. Entregando cabelos mais fortes e macios,
            com um crescimento natural e mega saudável.
            Este combo contém:
            01 Shampoo Instance Açaí e Bambu, 300 ml
            01 Condicionador Instance Açai e Bambu, 300 ml
            <h1>
                R$ 52,98
            </h1> <br />
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}