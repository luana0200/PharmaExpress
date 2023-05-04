import { Link } from 'react-router-dom'
import './medica.css'
import paracetamol from '../imagens/paracetamol.png'

export default function Paracetamol() {
    return (
            <div className='medica'>
                <img src={paracetamol} alt="paracetamol" />
            <h4>Paracetamol 750mg 20 Comprimidos Ems Genérico</h4><br />

            O Paracetamol é indicado em adultos para a redução da febre e para o alívio
            temporário de dores leves a moderadas, tais como: dores associadas a
            dores musculares, dores leves associadas a artrites e cólicas menstruais.
            Se persistirem os sintomas, o médico deverá ser consultado.
            Não use junto com outros medicamentos que contenham paracetamol, com álcool,
            Ou em caso de doença grave do fígado. Medicamentos podem causar efeitos indesejados.
            Evite a automedicação: informe-se com o farmacêutico.
            <h1>
                R$ 25,38
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}