import { Link } from 'react-router-dom'
import apiBack from '../../services/apiBack'
import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import visa12 from '../../components/Header/imagens/visa12.png'

export default function Index() {
    const [data, setData] = useState([''])

    useEffect(() => {
        async function listarPdt() {
            const result = await apiBack.get('/ListarProdutos')
            setData(result.data)
        }

        listarPdt()
    }, [data])


    return (
        <Container fluid>
            <div className='cabecalho'><h1>Produtos</h1></div>

            <Row className='d-flex justify-content-center'>
                {data.map((item) => {
                    return (
                        <Card className='m-2' style={{ width: '17rem' }} key={item.id}>
                            <Card.Img variant="top" width="220px" src={`http://localhost:3334/file/${item.banner}`} />
                            <Card.Body>
                                <Card.Title><h2>{item.name}</h2></Card.Title>
                                <Card.Title><h2>{item.value}</h2></Card.Title>
                                {/* <Button class="btn btn-primary" type="Button" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                                    Button with data-bs-target
                                </Button>

                                <div class="collapse" >
                                    <div class="card card-body">
                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                    </div>
                                </div> */}
                            </Card.Body>
                        </Card>
                    )
                })}

            </Row>
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