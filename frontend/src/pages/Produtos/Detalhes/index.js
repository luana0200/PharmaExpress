import { Link, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import apiBack from '../../../services/apiBack'
import React, { useEffect, useState } from 'react';

export default function Details () {
        const {id} = useParams()
        const [data, setData] = useState([]);
      
        useEffect(() => {
          const fetchData = async () => {
            const result = await apiBack.get('/ListarPdtUnico/' + id);
      
            setData(result.data);
          };
      
          fetchData();
        }, []);
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={data.banner} alt="Shampoo" />
                <h4>{data.name}</h4>
                <br />
                    {data.description}
                <h1>
                    R$ {data.value}
                </h1>
                {<div className='Container button' onClick={""}>
                    <Link to='/Carrinho'> <Button variant="secondary">COMPRAR</Button></Link>
                </div>}
            </Card>
        </Container >
    )
}