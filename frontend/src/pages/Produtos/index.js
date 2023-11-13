import { Link } from 'react-router-dom'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
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
        <div>
            <div className='cabecalho'><h1>Produtos</h1></div>


            {data.map((item, file) => (
                <div className='d-flex justify-content-center'>
                    <div>
                        <br />
                        {/* <Card.Img src={`http://localhost:3334/CriarProdutos/${file.originalname}`} />  */}
                        <img src= {item.banner}/>
                        <div>
                            <article><h2>
                                {item.name}<br />
                                {item.value}
                            </h2></article>
                            <div className='Container   llog'>
                            <Link to={`/Carrinho/${item.id}`}>Detalhes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='fluid '>
                <img src={visa12} alt="creme" />
                <br />
                <p>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-170| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-7987 | SAC – Serviço de Atendimento ao Cliente: 7987-3217, Dúvidas, elogios e reclamações:</p>
                <p>Política de privacidade | © 2023 RD. Todos os direitos reservados.</p>
            </div>
        </div>
    )
} 