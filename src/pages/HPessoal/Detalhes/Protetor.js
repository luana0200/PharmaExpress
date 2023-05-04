import './HP.css'
import protetor from '../imagens H/protetor.webp'
import { Link } from 'react-router-dom'

export default function Protetor(){
    return(
        <div className="pessoal">
            <img width="220px" src={protetor} alt="absorvente" />

            <h4> Protetor Solar Nivea 200 ml</h4><br/>
            Protetor Solar Facial Nivea Sun Toque Seco Antissinais FPS 60 
            Indicado para todos os tipos de pele, principalmente as sensíveis ao sol.
            Protege contra os raios UVA e UVB.
            Previne envelhecimento precoce e o aparecimento de manchas.
            Reduz o brilho e controla a oleosidade ao longo do dia.
            Oil Free e resistente à água.
            <h1>
                R$ 45,90
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}