import { Link } from 'react-router-dom'
import './medica.css'
import complexo from '../imagens/complexo.png'

export default function Complexo() {
    return (
            <div className='medica'>
                <img src={complexo} alt="Complexo" />
            <h4>Complexo B Polivitamínico 100 Comprimidos Ems</h4><br />
            Complexo B® é indicado para o tratamento de carência múltipla de vitaminas
            do complexo B e suas manifestações. Tem ação reguladora das carências
            quando já existem manifestações clínicas causadas pela deficiência vitamínica.
            Se persistirem os sintomas o médico deverá ser consultado.
            Complexo b ems é um medicamento. Seu uso pode trazer riscos.
            Procure o médico e o farmacêutico. Leia a bula.
            <h1>
                R$ 24,90
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link> 

        </div>
    )
}