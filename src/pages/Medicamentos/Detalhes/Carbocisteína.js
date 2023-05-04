import { Link } from 'react-router-dom'
import './medica.css'
import carbocisteína from '../imagens/carbocisteína.png'

export default function Acetilcisteína() {
    return (
            <div className='medica'>
                <img src={carbocisteína} alt="Carbocisteína" />
            <h4>Carbocisteína 50mg/ml Xarope 100ml Prati Donaduzzi Genérico Ems</h4> <br />
            A carbocisteína é indicada em afecções agudas ou crônicas do trato
            respiratório, nas quais a secreção abundante e/ou viscosa do muco seja
            considerado agravante; além de ser indicada nos casos de bronquites agudas e
            crônicas, insuficiência respiratória crônica, rinites, sinusites e laringites.
            Se persistirem os sintomas, o médico deverá ser consultado.
            Carbocisteína 50mg/ml é um medicamento. Seu uso pode trazer
            Riscos. Procure o médico e o farmacêutico. Leia a bula.
            <h1>
                R$ 19,97
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link> 
        </div>
    )
}