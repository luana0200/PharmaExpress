import { Link } from 'react-router-dom'
import './medica.css'
import cystex from '../imagens/cystex.png'

export default function Cystex() {
    return (
            <div className='medica'>
                <img src={cystex} alt="Cystex" />
            <h4>Cystex Cloridrato De Acriflavina 15mg + Metenamina 250mg + Cloretode Metiltionínio 20mg + Atropabelladonna L. 15mg 24 Drágeasems</h4><br />
            Cystex é indicado como antisséptico das vias urinárias nos casos de disúria
            (dificuldade de urinar), dor, ardor e desconforto para urinar.
            <h1>
                R$ 42,59
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link> 

        </div>
    )
}