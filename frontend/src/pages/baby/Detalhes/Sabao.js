import Sabao from '../imagens/Sabonet Liquido.webp'
import './baby.css'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function kitAzul() {

    // async function handleLogin(e) { // faznedo sem o AUTHCONTEXT
    //     e.preventDefault()
    //     if (!email || !password) {            // diminui o trafego
    //         toast.warn('Existem Campos em Branco')
    //     }

    //     try {
    //         const resposta = await apiLocal.post('/LoginUsuarios', {  //indo para o banco de dados
    //             id
    //         })

    //         if (resposta.data.id) {  //pega o id
    //             const token = resposta.data.token  //pega o token
    //             localStorage.setItem('@tklogin2023', JSON.stringify(token)) //armazena no localstorage o token  //JSON.stringify= tramforma o token em string
    //             toast.success('Login Efetuado com Sucesso')
    //         }

    //         const response = await apiLocal.get('/ListarLoginUsuarios', {  //indo para o banco de dados
    //             headers: {
    //                 Authorization: 'Bearer ' + `${token}`
    //             }
    //         })
    //         if (resposta.data.dados) {
    //             navigation('/')
    //             // alert('Token Inválido')
    //             return
    //         }



    //     } catch (err) {
    //         console.log('erro')
    //         // console.log(err.response.data.err)
    //     }


    // }
    return (
        <Container >
            <Card className='m-2, p-2'>
                <Card.Img className='detail' variant="top" src={Sabao} alt="Shampoo" />
                <h4>Sabonete Líquido JOHNSON'S 400ml</h4>
                <br />

                O Sabonete Líquido JOHNSON'S® de Glicerina possui uma fórmula com tecnologia micelar, que traz o equilíbrio ideal
                entre a suavidade que
                a pele do bebê precisa e a limpeza que você espera, protegendo a barreira natural da pele e evitando o ressecamento.
                <h1>
                    R$ 29,90
                </h1>
                <div  className='Container button'>
                    <Link to='/Carrinho'> <Button variant="secondary">COMPRA</Button></Link>
                </div>
            </Card>
        </Container >
    )
}