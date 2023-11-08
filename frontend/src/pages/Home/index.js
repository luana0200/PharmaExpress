import { Link } from 'react-router-dom'
import CarroselHome from '../../bootstrap/carroselHome.js'
import '../../components/Header/header.css'
import apiBack from '../../services/apiBack'
import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'

import visa12 from '../../components/Header/imagens/visa12.png'

export default function Home() {
    const [data, setData] = useState([]);
      
    useEffect(() => {
      const fetchData = async () => {
        const result = await apiBack.get('listarProdutos');
  
        setData(result.data);
      };
  
      fetchData();
    }, []);
    return (
        <Container fluid>
            <br />
            <CarroselHome />
            <br />

            <Row className='d-flex justify-content-center'>
            {data.map((item, index) => (
                <Card className='m-1' style={{ width: '20rem' }}>
                    <Badge bg="danger">PROMOÇAO 10%</Badge>
                    <Card.Img variant="top" width="220px" src={item.banner} />
                    <Card.Body>
                        <Card.Title><h2>{item.name}</h2></Card.Title>
                        <div className='Container llog'>
                            <Link to={item.id}><Button variant="secondary">Detalhes</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
                ))}
            </Row>


            <div className='fluid '>
                <img src={visa12} alt="creme" /><br />
                <h7>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-170| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-6987 | SAC – Serviço de Atendimento ao Cliente: 6987-3217, Dúvidas, elogios e reclamações:
                    atendimento@pharmaexpress.com.br.</h7><br />
                <p> <h7>Política de privacidade | © 2023 RD. Todos os direitos reservados.</h7> </p>
            </div>
        </Container>
    )
}