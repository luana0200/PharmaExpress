import sabonete from '../imagens H/sabonete protex.webp'
import './HP.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
export default function SaboneteProtex(){
    return(
        <Container >
        <Card className='m-2, p-2'>
            <Card.Img className='detail' variant="top"src={sabonete} alt="sabonete" />

            <h4>Sabonete Protex em Barra 85 g</h4>
            Sabonete em barra antibacteriano Protex® Limpeza profunda, remove gordura e impurezas dos poros para uma pele saudável. 
            Oferece proteção antibacteriana natural com óleo de linhaça. 
            Elimina 99,9% das bactérias mantendo você protegido ao longo do dia.
            <h1>
                R$ 5,87
            </h1>
            <div className='Container button'>
                    <Link to='/Compra'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>
            </Card>
        </Container>
    )
}