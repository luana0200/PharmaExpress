import './bela.css'
import batom from '../imagens/batom.png'
import { Link } from 'react-router-dom'
export default function Batom() {
    return (
        <div className='base'>
            <img src={batom} alt="Batom" />
            <h4>Batom Líquido Matte Tint Rosé Vintage </h4><br />
            O Batom Líquido GLAM Matte Tint é o batom que não sai!
            Sua fórmula matte inovadora proporciona cor intensa aos seus lábios por até 18 horas seguidas, com apenas uma camada,
            sem precisar de retoques.Altamente pigmentado e disponível em diversas cores, o batom líquido efeito mate é perfeito
            para destacar ainda mais sua maquiagem, sem marcar os vincos dos lábios, sem transferir e nem borrar durante o uso.
            Com fácil aplicação, o batom matte tint também é totalmente livre de testes em animais e 100% vegano.
            <br/>
            <div className='promocao'>
                        <button>PROMOÇAO 10%</button>
                    </div>
            <h1>
                R$ 43,98
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
       </div>
    )
}










