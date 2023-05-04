import { Link } from 'react-router-dom'
import './medica.css'
import desloratadina from '../imagens/desloratadina.png'

export default function Desloratadina() {
    return (
            <div className='medica'>
                <img src={desloratadina} alt="Desloratadina" />
            <h4>Desloratadina 5mg 30 Comprimidos Ems Genérico</h4><br />

            Desloratadina é indicado para o alívio rápido dos sintomas associados à rinite alérgica
            (incluindo rinite alérgica intermitente e persistente), entre eles: espirro; rinorreia; prurido e
            congestão nasal; prurido ocular, lacrimejamento e vermelhidão dos olhos; prurido do palato e tosse.
            Desloratadina 5mg é um medicamento. Seu uso pode trazer
            Riscos. Procure um médico ou um farmacêutico. Leia a bula.
            Medicamentos podem causar efeitos indesejados. Evite a
            Automedicação: informe-se com o farmacêutico.
            <h1>
                R$ 65,50
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}