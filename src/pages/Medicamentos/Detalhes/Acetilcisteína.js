import { Link } from 'react-router-dom'
import './medica.css'
import acetilcisteína from '../imagens/acetilcisteína.png'

export default function Acetilcisteína() {
    return (
        <div className='medica'>
            <img src={acetilcisteína} alt="Acetilcisteína" />
            <h4>Acetilcisteína 600mg Granulado Sabor Laranja Genérico Ems </h4><br/>
                    A Acetilcisteína é um medicamento expectorante que ajuda a eliminar as
                    secreções produzidas nos pulmões, facilitando a respiração.
                    Acetilcisteína é um medicamento. Seu uso pode trazer riscos.
                    Procure um médico ou um farmacêutico. Leia a bula..
                <h1>
                    R$ 43,87
                </h1> 
                <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}