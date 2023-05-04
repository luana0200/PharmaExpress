import { Link } from 'react-router-dom'
import './medica.css'
import ambroxol from '../imagens/ambroxol.png'

export default function Ambroxol() {
    return (
            <div className='medica'>
                <img src={ambroxol} alt="Ambroxol" />
            <h4>Cloridrato De Ambroxol 30mg/5ml Xarope 120ml Ems Genérico</h4><br />

            Este medicamento é indicado para o tratamento das doenças
            broncopulmonares (brônquios e pulmões) agudas e crônicas para facilitar a
            expectoração (soltar o catarro do peito) quando houver acúmulo de secreção.
            Cloridrato de ambroxol é um medicamento. Seu uso pode trazer
            Riscos. Procure um médico ou um farmacêutico. Leia a bula. Não
            Use este medicamento em crianças menores de dois anos de idade.
            <h1>
                R$ 15,69
            </h1>
            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link> 

        </div >
    )
}