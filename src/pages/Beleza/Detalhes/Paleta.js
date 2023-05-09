import './bela.css'
import paleta from '../imagens/paleta.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Paleta() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={paleta} alt="Paleta" />
            <h4>Palette de Sombras CrystalNinna Secrets 16,5g</h4>

            Com cores e pigmentação inspirados no brilho dos cristais, a Palette de Sombras Crystal Niina Secrets é para quem ama versatilidade nas suas  maquiagens.
            A paleta de sombras traz ultra pigmentação já na primeira aplicação e cores tendências intensas que descarregam facilmente nas pálpebras.
            Além disso, olha só o que mais esse produto vegano oferece:
            -Ultra pigmentação na primeira aplicação;
            -Longa duração de 8h;
            -Alta fixação.
            -15 cores; 4 texturas diferentes: matte aveludada, acetinada, brilho multidimensional e bounce brilho cristal;
            Ideal para criar diversas combinações de make que duram muito para qualquer ocasião!
            
            <h1>
                R$ 134,99
            </h1> <br />
            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}



















