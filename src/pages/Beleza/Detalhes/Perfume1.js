import perfume1 from '../imagens/perfume1.png'
import './bela.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/esm/Badge'

export default function Perfume() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={perfume1} alt="Perfume1" />
                <h4>Desodorante Colônia 95ml</h4>

                Club 6 Desodorante Colônia é uma fragrância masculina inspirada
                no homem audacioso, que sabe aproveitar em alto estilo tudo o que a vida tem a lhe oferecer.
                Club 6 traz todo o seu poder de sedução carrega notas repletas de frescor e sensualidade.
                Sucesso em Eudora, é magnética e fascinante, harmonizando perfeitamente o frescor do acorde cítrico com notas
                de menta e o rico complexo amadeirado. Feito com matérias-primas selecionadas criteriosamente.
                O exclusivo Segredo de Eudora aumenta ainda mais a intensidade e durabilidade dessa fragrância especial.
                Club 6, para ele que é exclusivo.
                <h1>
                    R$ 99,99
                </h1> <br />
                <div className='promocao'>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                </div>
                <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}













