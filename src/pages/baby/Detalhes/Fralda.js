import './baby.css'
 import fralda from '../imagens/Fralda.webp'
 import { Link } from 'react-router-dom'

 export default function Fralda(){
     return(
         <div className="baby">
             <img src={fralda} alt="Fralda" />
                     <h4> Fralda Pampers 24 unidades</h4><br />
                     Pampers Confort Sec é uma fralda descartável para proporcionar uma noite tranquila ao bebê. Ela contém canais de
                      ar que permitem uma circulação livre do ar dentro 
                     da fralda, evitando que o bumbum do bebê fique abafado e deixando a pele arejada e sequinha durante a noite.
                     <br/>
     
             <h1>
                 R$ 31,90
             </h1>
             <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
         </div>
     )
 }