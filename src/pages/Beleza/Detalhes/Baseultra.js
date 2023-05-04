import './bela.css'
import baseUltra from '../imagens/base.png'
import { Link } from 'react-router-dom'

export default function BaseUltra() {
    return (
        <div className='base'>
            
            <img src={baseUltra} alt="Base" />
            <h4>Base Líquida Ultra Matte 25ml</h4>
            Essa Base traz um novo conceito totalmente repensado
            A marca que traduz moda esta repaginada com produtos ainda melhores e mais modernos
            Base Líquida Soul Ultra Matte proporciona uma make a prova de photos e pele sequinha o dia todo
            Conta com vitamina E que hidratada a pele, efeito antipoluição e FPS 15 é perfeita para usar no dia a dia
            Base Líquida Soul Ultra Matte, perfeita para uma pele sequinha, protegida e radiante.
            <br/>

            <div className='promocao'>
                <button>PROMOÇAO 10%</button>
            </div>
            <h1>
                R$ 44,91
            </h1> <br />

            <Link to='/Compra'><button className='detalhes'>COMPRAR</button></Link>
        </div>
    )
}