import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Carrinho from './components/Carrinho'
import Login from './pages/Cadastro/Login'
// import ListarCategoria from './pages/Listar'

import Produtos from './pages/Produtos'
import CriarProdutos from './pages/Produtos/CriarProdutos'


export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Cadastro' element={<Cadastro />} />
                <Route path='/Carrinho/:id' element={<Carrinho />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Produtos' element={<Produtos />} />
                {/* <Route path='/ListarCategoria' element={<ListarCategoria />} /> */}
                <Route path='/CriarProdutos' element={<CriarProdutos />} />
            </Routes>

        </BrowserRouter>

    )
}