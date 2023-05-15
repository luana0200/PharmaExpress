import escovacarvao from '../imagens H/escova colgate carvao.jpg'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function EscovaColgate(){
    return(
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={escovacarvao} alt="escova de dente" />
                <h4> Escova Dental Colgate 4 unidade  </h4>
                A Escova Dental Colgate Preta é indicada para o cuidado e proteção da saúde bucal. 
                O produto possui as cerdas ultramacias e infundidas no carvão, que limpam os dentes profundamente, 
                sem causar desconfortos. Uso diário. A embalagem contém 4 unidades.
               
                <h1> R$ 20,90</h1>
                <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}