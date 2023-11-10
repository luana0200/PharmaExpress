import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import apiBack from '../../services/apiBack'
import React, { useEffect, useState } from 'react';

import visa12 from '../../components/Header/imagens/visa12.png'

export default function Index() {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await apiBack.get('listarProdutos');

    //         setData(result.data);
    //     };

    //     fetchData();
    // }, []);

    useEffect(() => {
        async function listarPdt() {
            const result = await apiBack.get('/ListarProdutos');

            setData(result.data);
        }

        listarPdt()
    }, [])
    return (
        <Container fluid >
            <div className='cabecalho'><h1>Produtos</h1></div>


            {data.map((item, file) => (
                <Row className='d-flex justify-content-center'>
                    <Card className='m-2' style={{ width: '17rem' }}>
                        <br />
                        {/* <img src={`http://localhost:3334/CriarProdutos/${file.banner}`} /> */}
                        <Card.Img src={`http://localhost:3334/CriarProdutos/${file.originalname}`} /> 
                        <Card.Body>
                            <Card.Title><h2>
                                {item.name}<br />
                                {item.value}
                               
                                
                              
                                </h2></Card.Title>
                            <div className='Container   llog'>
                                <Link to='/Carrinho'><Button variant="secondary">Detalhes</Button></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            ))}
            <div className='fluid '>
                <img src={visa12} alt="creme" />
                <br />
                <p>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-170| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-7987 | SAC – Serviço de Atendimento ao Cliente: 7987-3217, Dúvidas, elogios e reclamações:</p>
                <p>Política de privacidade | © 2023 RD. Todos os direitos reservados.</p>
            </div>
        </Container >
    )
} 