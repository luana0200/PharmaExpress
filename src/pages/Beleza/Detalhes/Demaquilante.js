import './bela.css'
import demaquilante from '../imagens/Demaquilante2.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Demaquilante() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={demaquilante} alt="Demaquilante" />
                <h4>Demaquilante Cleansing Oil 100ml</h4>

                O Cleansing Oil de Niina Skin é um demaquilante não comedogênico inspirado na nossa rainha
                a maquiagem com Óleo de Jojoba e Óleo de Rosa Mosqueta. Essa fórmula inovadora especialmente desenvolvida:
                ·        Não arde os olhos;
                ·        Remove facilmente até as maquiagens à prova d’água e de longa duração. Além disso, o demaquilante vegano também remove:
                ·        Impurezas;
                ·        Poluição;
                ·        Resíduos de protetor solar;
                ·        Oleosidade da pele (sem ressecar).
                O óleo demaquilante é ideal para uma pele macia, perfeitamente limpa, sem resíduos e com luminosidade ideal.
                Atua na remoção da acne;
                Reduz a oleosidade;
                Uniformiza o tom da pele.
                <h1>
                    R$ 63,99
                </h1> <br />
                <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}