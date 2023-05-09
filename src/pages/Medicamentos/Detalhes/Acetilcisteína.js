import { Link } from 'react-router-dom'
import acetilcisteína from '../imagens/acetilcisteína.png'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function Acetilcisteína() {
    return (
        
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={acetilcisteína} alt="Acetilcisteína" />
        <h4>Acetilcisteína 600mg Granulado Sabor Laranja Genérico Ems </h4><br/>
                    A Acetilcisteína é um medicamento expectorante que ajuda a eliminar as
                    secreções produzidas nos pulmões, facilitando a respiração.
                    Acetilcisteína é um medicamento. Seu uso pode trazer riscos.
                    Procure um médico ou um farmacêutico. Leia a bula..
                <h1>
                    R$ 43,87
                </h1> 
                <div className='Container llog'>
                    <Link to='/Compra'> <Button variant="secondary">Detalhes</Button></Link>
                </div>
            </Card>
        </Container>
        
       
    )
}