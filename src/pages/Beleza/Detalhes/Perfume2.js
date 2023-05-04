import './bela.css'
import perfume2 from '../imagens/perfume2.png'
import { Link } from 'react-router-dom'
export default function Perfume() {
    return (

        <div className='base'>
            <img src={perfume2} alt="Perfume2" />
            <h4>Pulse Desodorante Côlonia100ml</h4>

            O Pulse Desodorante Colônia é um item da perfumaria masculina de Eudora que vai impulsionar o homem moderno a conquistar todos os seus objetivos.
            O caminho para o sucesso pode ser cheio de desafios, mas com uma fragrância que exala força e confiança, você estará preparado para encarar qualquer obstáculo com elegância.
            Sucesso em Eudora, é magnética e fascinante, harmonizando perfeitamente o frescor do acorde cítrico com notas de menta e o rico complexo amadeirado. Feito com matérias-primas selecionadas criteriosamente.
            O exclusivo Segredo de Eudora aumenta ainda mais a intensidade e durabilidade dessa fragrância especial.
            <h1>
                R$ 59,99
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}
