import './bela.css'
import rimel from '../imagens/rimel.png'
import { Link } from 'react-router-dom'
export default function Rimel() {
    return (
        <div className='base'>
            <img src={rimel} alt="Rimel" />
            <h4>Máscara Para Cílios Super Up 8mg</h4>

            Máscara Super Up Niina Secrets Eudora: 13x mais volume e curvatura nas alturas.
            Fórmula com fibras e exclusiva tecnologia Secrets, com óleo de rosas e vitaminas: nutre a pele, possui efeito antioxidante e auxilia na formação de colágeno.
            Benefícios:
            - Volume e curvatura nas alturas.
            - Pincel exclusivo Niina com fibras que preenchem por completo.
            - Tecnologia Secrets que nutre os fios.
            <div className='promocao'>
                        <button>PROMOÇAO 10%</button>
                    </div>
                    <br/>
            <h1>
                R$ 49,41
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}














