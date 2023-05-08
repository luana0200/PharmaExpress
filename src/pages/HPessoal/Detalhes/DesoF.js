import './HP.css'
import desoF from '../imagens H/desoF.webp'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function DesoF(){
    return(
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={desoF} alt="desodorante" />
            <h4>Desodorante Rexona Fem 200 ml</h4><br />

            <h1>R$ 16,99</h1>
            <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
                </div>
            </Card>
        </Container>
    )
}