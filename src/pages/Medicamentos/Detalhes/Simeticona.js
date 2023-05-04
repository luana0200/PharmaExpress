import { Link } from 'react-router-dom'
import './medica.css'
import simeticona from '../imagens/simeticona.jpg'

export default function Simeticona() {
    return (
            <div className='medica'>
                <img src={simeticona} alt="Simeticona" />
            <h4>Simeticona 75mg/ml Sabor Morango Gotas 15ml Ems Genérico</h4><br />

            A Simeticona é indicada para pacientes com excesso de gases no aparelho digestivo.
            O acúmulo de gases no estômago e no intestino chama-se flatulência,
            ue causa desconforto abdominal, aumento de volume abdominal, dor ou cólicas no abdômen.
            Se persistirem os sintomas, o médico deverá ser consultado.
            Simeticona é um medicamento. Seu uso pode trazer riscos. Procure o médico e o farmacêutico.
            Ou em caso de doença grave do fígado. Medicamentos podem causar efeitos indesejados.
            Evite a automedicação: informe-se com o farmacêutico.
            <h1>
                R$ 9,19
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}