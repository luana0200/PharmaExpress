import { Link } from 'react-router-dom'
import './medica.css'
import allexofedrin from '../imagens/allexofedrin.png'

export default function Allexofedrin() {
    return (
            <div className='medica'>
                <img src={allexofedrin} alt="Allexofedrin" />
            <h4>Allexofedrin Cloridrato De Fexofenadina 120mg 10 Comprimidos</h4><br />

            Está indicado para o alívio das manifestações alérgicas, tais como: rinite
            alérgica incluindo espirros e obstrução nasal (nariz entupido); prurido (coceira)
            no nariz, no palato (céu da boca), na garganta e nos olhos; coriza (nariz
            escorrendo); conjuntivite alérgica com sintomas de lacrimejamento e
            alergias da pele como os da urticária (erupções avermelhadas na pele que causam coceira).
            Se persistirem os sintomas, o médico deverá ser consultado.
            Allexofedrin 120mg é um medicamento. Seu uso pode trazer riscos.
            Procure o médico e o farmacêutico. Leia a bula.
            <h1>
                R$ 33,99
            </h1> <br />

           <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link> 
        </div>
    )
}