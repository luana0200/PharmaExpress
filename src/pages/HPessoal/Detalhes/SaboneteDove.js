import './HP.css'
import sabonetedove from '../imagens H/sabonete dove.jpg'
import { Link } from 'react-router-dom'

export default function SaboneteDove(){
    return(
        <div className="pessoal">
            <img width="220px" src={sabonetedove} alt="sabonete dove" />
            <h4>Sabonete Dove 85 g</h4> <br />
                Dove não resseca a pele como sabonetes comuns.
                Tecnologia de limpeza e manutenção da hidratação com suavidade para sua pele.
                Deixa a pele macia, bem cuidada e com aspecto saudável.
                Pode ser usado diariamente no rosto, mãos e corpo.
            <h1>
                R$ 5,99
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}