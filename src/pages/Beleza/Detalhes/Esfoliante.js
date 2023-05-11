import './bela.css'
import esfoliante from '../imagens/Esfoliante2.png'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Esfoliante() {
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={esfoliante} alt="esfoliante" />
                <h4>Máscara Esfoliante Enzimá 75g</h4>

                A Máscara Esfoliante Enzimática Eudora Niina Skin combina a potente tecnologia Skin Sec
                com Argila Branca, Casaca de Coco e Extrato Enzimático de Abacaxi para uma esfoli
                química, física e enzimática garantindo uma pele macia e iluminada em segun
                Com microesferas biodegradáveis, a fórmula da máscara esfoliante garante diversos benefíc
                ·        Esfoliação agradável;
                ·        Estimula a renovação da pele;
                ·        Mantém a hidratação natural;
                ·        Uniformiza o tom de pele;
                ·        Desobstrui e reduz a aparência dos poros;
                ·        Reduz e controla a oleosidade por até 6 horas;
                ·        Elimina células mortas sem agredir e sem ressecar;
                ·        Melhora a textura da pele.
                <h3>
                    R$ 56,99
                </h3> <br />
                <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}