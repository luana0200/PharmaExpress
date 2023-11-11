import './carrinho.css'
import '../Header/header.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Container from 'react-bootstrap/Container';
import api from '../../services/apiBack'

export default function Carrinho() {

  const [produtos, setProdutos] = useState([])
  const navigation = useNavigate()

  useEffect(() => {
    const minhaLista = localStorage.getItem('@produtocarrinho')
    setProdutos(JSON.parse(minhaLista) || [])
  }, [])

  // function excluirProduto(id) {
  //   let filtroProdutos = produtos.filter((item) => {
  //     return (item.id !== id)
  //   })
  //   setProdutos(filtroProdutos)
  //   localStorage.setItem('@produtocarrinho', JSON.stringify(filtroProdutos))
  // }


  //verificando token 
  useEffect(() => {
    const iToken = localStorage.getItem('@phlogin2k23')
    const token = JSON.parse(iToken)

    if (!token) {
      toast.warning('Faça Login')
      navigation('/Login')
      // return
    } else if (token) {

      async function verificarToken() {
        const result = await api.get('/ListarUsuarioToken', {
          headers: {
            Authorization: 'Bearer ' + `${token}`
          }
        })
      }
      verificarToken()

    }
  }, [])

  return (
    <Container fluid>
      <div className='cabecalho'>
        <h1>CARRINHO DE COMPRAS</h1></div>
      <div>
        {produtos.map((produtos) => {
          return (
            <div>
              <li key={produtos.id}>
              </li>
            </div>
          )
        })}
      </div>
    </Container>
  )
}