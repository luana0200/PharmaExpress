import './baby.css'
import lenco from '../imagens/Lenco umidecido.png' 
import { Link } from 'react-router-dom'

export default function Lenco() {
    return (
        <div className="baby">
           <img width="110px" src={lenco} alt="lenco" />
             <h4>Lenço umedecido Johnson's Baby </h4><br />
                    As Toalhinhas Umedecidas Johnson's Baby Extra Cuidado possuem a exclusiva essência Natural Calm que libera um 
                    cheirinho suave e proporciona uma agradável sensação de relaxamento, com propriedades suavizantes, além de contar
                     com a inovadora fórmula Chega de Lágrimas, permitindo o uso inclusive no rosto, sem arder os olhos. Com essência 
                     exclusiva Natural Calm e fórmula Chega de Lágrimas, possuem propriedades relaxantes e suavizantes. 
                     Dermatologicamente testada e hipoalergênica.
             <br/>
            <h1>
                R$ 19,90
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}

