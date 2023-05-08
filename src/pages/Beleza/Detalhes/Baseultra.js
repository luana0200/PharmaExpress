import './bela.css'
import baseUltra from '../imagens/base.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'


export default function BaseUltra() {
    return (
        <Container >
        <Card className='m-2, p-2'>
           <Card.Img className='detail' variant="top" src={baseUltra} alt="Base" />
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

            <div className='Container llog'>
               <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
            </div>
         </Card>
      </Container >
   )
}