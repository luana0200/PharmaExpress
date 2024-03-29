import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiBack from '../../services/apiBack'
import { toast } from 'react-toastify'

export default function Produtos() {
  const navigation = useNavigate()
  const [produtos, setProdutos] = useState([])
  const [data, setData] = useState([''])
  //const [produtos, setProdutos] = useState([''])


  // useEffect(() => {
  //     const minhaLista = localStorage.getItem('@produtoscarrinho')
  //     setProdutos(JSON.parse(minhaLista) || [])
  // }, [])
  //verificando token 
  // useEffect(() => {
  //   const iToken = localStorage.getItem('@phlogin2k23')
  //   const token = JSON.parse(iToken)

  //   if (!token) {
  //     // toast.warning('Sessão Expirada')
  //     toast.warning('Efetue um Login')
  //     navigation('/Login')

  //   } else if (token) {

  //     async function verificarToken() {
  //       const result = await apiBack.get('/ListarUsuarioToken', {
  //         headers: {
  //           Authorization: 'Bearer ' + `${token}`
  //         }
  //       })
  //       console.log(result)
  //     }
  //     verificarToken()

  //   }
  // }, [])


  // useEffect(() => {
  //   const minhaLista = localStorage.getItem('@phlogin2k23')
  //   setProdutos(JSON.parse(minhaLista) || [])
  // }, [])




  useEffect(() => {
    async function listarPdt() {
        const result = await apiBack.get('/ListarPdtUnico')
        setData(result.data)
      }
      listarPdt()

}, [data])



  return (
      <div>
          <h1>carrinho</h1>
          <ul>
              {data.map((item) => {
                  return (
                      <div className='containerGeral'>
                          <div>
                              <li key={item.id}>
                                  <img variant="top" width="100px" src={`http://localhost:3334/file/${item.banner}`} /><br />
                                  <span>{item.name}</span><br/>
                                  <span>{item.value}</span>
                              </li>
                          </div>
                          <div>
                             
                          </div>
                      </div>
                  )
                })}
          </ul>
                <button><Link to={'/'}> Continuar comprando</Link></button>
          </div>
        )
        }
  {/* useEffect(() => {
    async function criarCarrinho() {
      const resulta = await apiBack.post('/CriarCarrinho')
      setProdutos(resulta.carrinho)
    }

    criarCarrinho()
  }, [carrinho])

  return (
    <div>
      <h1>CARRINHO DE COMPRAS</h1>
      <ul>
        {produtos.map((produtos) => {
          return (
            <article key={produtos.id}>
              <h2>{produtos.id}</h2>
              <h2>Nome:</h2> <h2>{produtos.name}</h2>
              <img src={`http://localhost:3334/file/${produtos.banner}`} />
              <h2>Valor:</h2> <h2>{produtos.value}</h2>

            </article>

          )
        })}
 */}

// import './carrinho.css'
// import '../Header/header.css'
// import { useState, useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import apiBack from '../../services/apiBack'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// // import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// export default function Carrinho() {
//   const { id } = useParams()
//   const [produtos, setProdutos] = useState([])
//   const [carrinho, setCarrinho] = useState([])
//   const navigation = useNavigate()

//   // useEffect(() => {
//   //   const minhaLista = localStorage.getItem('@phlogin2k23')
//   //   setProdutos(JSON.parse(minhaLista) || [])
//   // }, [])

//   // function excluirProduto(id) {
//   //   let filtroProdutos = produtos.filter((item) => {
//   //     return (item.id !== id)
//   //   })
//   //   setProdutos(filtroProdutos)
//   //   localStorage.setItem('@produtocarrinho', JSON.stringify(filtroProdutos))
//   // }

//   useEffect(() => {
//     async function listarPdt() {
//       const resulta = await apiBack.get('/ListarCarrinho/${id}')
//       setProdutos(resulta.produtos)
//     }

//     listarPdt()
//   }, [produtos])

//   useEffect(() => {
//     async function criarCarrinho() {
//       const resulta = await apiBack.post('/CriarCarrinho')
//       setProdutos(resulta.carrinho)
//     }

//     criarCarrinho()
//   }, [carrinho])
//   //verificando token 
//   useEffect(() => {
//     const iToken = localStorage.getItem('@phlogin2k23')
//     const token = JSON.parse(iToken)

//     if (!token) {
//       // toast.warning('Sessão Expirada')
//       toast.warning('Efetue um Login')
//       navigation('/Login')

//     } else if (token) {

//       async function verificarToken() {
//         const result = await apiBack.get('/ListarUsuarioToken', {
//           headers: {
//             Authorization: 'Bearer ' + `${token}`
//           }
//         })
//       }
//       verificarToken()

//     }
//   }, [])

//   return (
//     <div>
//       <h1>CARRINHO DE COMPRAS</h1>
//       <ul>
//         {produtos.map((produtos) => {
//         return(
//           <article key={produtos.id}>
//           <h2>{produtos.id}</h2>
//           <h2>Nome:</h2> <h2>{produtos.name}</h2>
//           <img src={`http://localhost:3334/file/${produtos.banner}`} />
//           <h2>Valor:</h2> <h2>{produtos.value}</h2>
         
//         </article>
        
//         )})}
            
        
        

//       </ul>
//     </div>

//   )
// }


// {/* <Row className='d-flex justify-content-center'>
// {produtos.map((produto) => {
//   return (
//     <Card className='m-2' style={{ width: '17rem' }} key={produto.id}>
//       <Card.Img variant="top" width="100px" src={`http://localhost:3334/file/${produto.banner}`} />
//       <Card.Body>
//         <Card.Title><h2>{produto.name}</h2></Card.Title>
//         <Card.Title><h2>{produto.value}</h2></Card.Title>


//       </Card.Body>
//     </Card>
//   )
// })}

// </Row>
// </div>
// </div>
