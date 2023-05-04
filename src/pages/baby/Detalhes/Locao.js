import './baby.css'
import { Link } from 'react-router-dom'
  import Locao from '../imagens/Locao hidratante.jpg'

  export default function Baseultra(){
      return(
         <div className="baby">
              <img src={Locao} alt="Locao" />
                      <h4>Loção Hidratante Johnson's Baby</h4><br/>
                      O Hidratante para Corpo e Rosto Recém-NascidoC é ideal para a hidratação da pele frágil do bebê. 
                      Sua fórmula é desenvolvida com algodão de verdade, nutrindo a pele do bebê desde 
                      o primeiro dia. Além disso, é hipoalergênico, livre de corantes, parabenos, sulfatos e ftalatos, e não deixa resíduos.
                   
                   
              <h1>
                 R$ 50,90
              </h1>
              <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
      )
  }