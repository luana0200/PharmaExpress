import './bela.css'
import demaquilante from '../imagens/demaquilante.png'
import { Link } from 'react-router-dom'
export default function Demaquilante() {
    return (
        <div className='base'>
            <img src={demaquilante} alt="Demaquilante" />
            <h4>Gel Secativo Pele com AcneAção Rápida 15g</h4>

            O Cleansing Oil de Niina Skin é um demaquilante não comedogênico inspirado na nossa rainha
            a maquiagem com Óleo de Jojoba e Óleo de Rosa Mosqueta. Essa fórmula inovadora especialmente desenvolvida:
            ·        Não arde os olhos;
            ·        Remove facilmente até as maquiagens à prova d’água e de longa duração. Além disso, o demaquilante vegano também remove:
            ·        Impurezas;
            ·        Poluição;
            ·        Resíduos de protetor solar;
            ·        Oleosidade da pele (sem ressecar).
            O óleo demaquilante é ideal para uma pele macia, perfeitamente limpa, sem resíduos e com luminosidade ideal.
            Atua na remoção da acne;
            Reduz a oleosidade;
            Uniformiza o tom da pele.
            <h1>
                R$ 63,99
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}