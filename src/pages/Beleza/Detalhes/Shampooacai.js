import shampooacai from '../imagens/shampooacai2.png'
import './bela.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Shampoo() {
    return (
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top" src={shampooacai} alt="Shampooacai" />
            <h4>Combo Açai e Bambu</h4>

            O Combo Instance Açaí e Bambu entrega um tratamento ideal para garantir fios longos, macios,
            saudáveis e mega hidratados.
            A linha Instance Açaí e Bambu é formulada com ingredientes naturais que auxiliam no
            crescimento e fortalecimento do fio, evitando quebra. Entregando cabelos mais fortes e macios,
            com um crescimento natural e mega saudável.
            Este combo contém:
            01 Shampoo Instance Açaí e Bambu, 300 ml
            01 Condicionador Instance Açai e Bambu, 300 ml
            <h1>
                R$ 52,98
            </h1> <br />
           
            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container >
    )
}