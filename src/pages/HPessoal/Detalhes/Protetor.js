import './HP.css'
import protetor from '../imagens H/protetor.webp'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Protetor(){
    return(
       
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top"src={protetor} alt="absorvente" />


            <h4> Protetor Solar Nivea 200 ml</h4><br/>
            Protetor Solar Facial Nivea Sun Toque Seco Antissinais FPS 60 
            Indicado para todos os tipos de pele, principalmente as sensíveis ao sol.
            Protege contra os raios UVA e UVB.
            Previne envelhecimento precoce e o aparecimento de manchas.
            Reduz o brilho e controla a oleosidade ao longo do dia.
            Oil Free e resistente à água.
            <h1>
                R$ 45,90
            </h1>
            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
                </div>
            </Card>
        </Container>
    )
}