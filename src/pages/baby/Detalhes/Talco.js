import './baby.css'
import talco from '../imagens/Talco.jpg'
import { Link } from 'react-router-dom'
export default function Baseultra(){
    return(
       <div className="baby">
            <img src={talco} alt="talco" />
            <h4> Talco</h4><br />
            O Talco JOHNSON'S® Baby Pura Proteção foi desenvolvido para deixar a pele macia e perfumada com a fragrância que é sinônimo de “cheirinho de bebê”. Absorve o excesso de umidade da pele,
             deixando o seu bebê sequinho e confortável. Livre de corantes, parabenos e ftalatos. Testado por dermatologistas.
            
            <h1>
               R$ 6,99
            </h1>
              <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
      </div>
    )
}