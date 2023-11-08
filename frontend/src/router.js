import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import Carrinho from './components/Carrinho'
import Login from './pages/Cadastro/Login'

import Produtos from './pages/Produtos'
import Detalhes from './pages/Produtos/Detalhes'
import ProdutosPorCategoria from './pages/Produtos/ProdutosPorCategoria'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/Detalhes/:id' element={<Detalhes />} />
                <Route path='/Produtos' element={<Produtos />} />
                <Route path='/:id' element={<ProdutosPorCategoria />} />

                <Route path='/Cadastro' element={<Cadastro />} />
                <Route path='/' element={<Home />} />
                <Route path='/Carrinho' element={<Carrinho />} />
                <Route path='/Login' element={<Login />} />
            </Routes>

        </BrowserRouter>

    )
}