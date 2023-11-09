import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import Carrinho from './components/Carrinho'
import Login from './pages/Cadastro/Login'

import HPessoal from "./pages/HPessoal"
import Absorvente from './pages/HPessoal/Detalhes/Absorvente'
import Condicionador from './pages/HPessoal/Detalhes/Condicionador'
import CremeFacial from './pages/HPessoal/Detalhes/CremeFacial'
import DesoF from './pages/HPessoal/Detalhes/DesoF'
import DesoM from './pages/HPessoal/Detalhes/DesoM'
import PastaDentalOral from './pages/HPessoal/Detalhes/PastaDentalOral'
import PastaDenteColgate from './pages/HPessoal/Detalhes/PastaDenteColgate'
import ProtetorNivea from './pages/HPessoal/Detalhes/ProtetorNivea'
import SaboneteDove from './pages/HPessoal/Detalhes/SaboneteDove'
import Shampoo1 from './pages/HPessoal/Detalhes/Shampoo'

import Baby from './pages/baby'
import Fralda from './pages/baby/Detalhes/Fralda'
import Locao from './pages/baby/Detalhes/Locao'
import Pomada from './pages/baby/Detalhes/Pomada'
import Aptamil from './pages/baby/Detalhes/Aptamil'
import Lenco from './pages/baby/Detalhes/lenco'
import Sabonete from './pages/baby/Detalhes/sabonete'
import ShampooJonhson from './pages/baby/Detalhes/ShampooJonhson'
import Sabao from './pages/baby/Detalhes/Sabao'
import Lenco2 from './pages/baby/Detalhes/Lenco2'
import Talco from './pages/baby/Detalhes/Talco'

import Produtos from './pages/Produtos'
import Detalhes from './pages/Produtos/Detalhes'
import ProdutosPorCategoria from './pages/Produtos/ProdutosPorCategoria'
import Beleza from "./pages/Beleza"
import Batom from './pages/Beleza/Detalhes/Batom'
import BaseUltra from './pages/Beleza/Detalhes/Baseultra'
import Deliniador from './pages/Beleza/Detalhes/Deliniador'
import Demaquilante from './pages/Beleza/Detalhes/Demaquilante'
import Hidratante from './pages/Beleza/Detalhes/Hidratante'
import Paleta from './pages/Beleza/Detalhes/Paleta'
import Perfume1 from './pages/Beleza/Detalhes/Perfume1'
import Perfume4 from './pages/Beleza/Detalhes/Perfume4'
import ProtetorSolar from './pages/Beleza/Detalhes/ProtetorSolar'
import Rimel from './pages/Beleza/Detalhes/Rimel'


import Medicamentos from "./pages/Medicamentos"
import Acetilcisteína from './pages/Medicamentos/Detalhes/Acetilcisteína'
import Ambroxol from './pages/Medicamentos/Detalhes/Ambroxol'
import Complexob from './pages/Medicamentos/Detalhes/Complexob'
import Cystex from './pages/Medicamentos/Detalhes/Cystex'
import Declofenaco from './pages/Medicamentos/Detalhes/Declofenaco'
import Desloratadina from './pages/Medicamentos/Detalhes/Desloratadina'
import Dipirona from './pages/Medicamentos/Detalhes/Dipirona'
import Doricin from './pages/Medicamentos/Detalhes/Doricin'
import Emsgrip from './pages/Medicamentos/Detalhes/emsgrip'
import Simeticona from './pages/Medicamentos/Detalhes/Simeticona'
import Compra from './components/Compra/Compra'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/HPessoal' element={<HPessoal />} />
                <Route path='/Absorvente' element={<Absorvente />} />
                <Route path='/Condicionador' element={<Condicionador />} />
                <Route path='/CremeFacial' element={<CremeFacial />} />
                <Route path='/DesoF' element={<DesoF />} />
                <Route path='/DesoM' element={<DesoM />} />
                <Route path='/PastaDentalOral' element={<PastaDentalOral />} />
                <Route path='/PastadenteColgate' element={<PastaDenteColgate />} />
                <Route path='/ProtetorNivea' element={<ProtetorNivea />} />
                <Route path='/SaboneteDove' element={<SaboneteDove />} />
                <Route path='/Shampoo' element={<Shampoo1 />} />


                <Route path='/Cadastro' element={<Cadastro />} />
                <Route path='/' element={<Home />} />
                <Route path='/Carrinho' element={<Carrinho />} />
                <Route path='/Login' element={<Login />} />


                <Route path='/Baby' element={<Baby />} />
                <Route path='/Fralda' element={<Fralda />} />
                <Route path='/Locao' element={<Locao />} />
                <Route path='/Pomada' element={<Pomada />} />
                <Route path='/Lenco' element={<Lenco />} />
                <Route path='/Aptamil' element={<Aptamil />} />
                <Route path='/Sabonete' element={<Sabonete />} />
                <Route path='/ShampooJonhson' element={<ShampooJonhson />} />
                <Route path='/Sabao' element={<Sabao />} />
                <Route path='Lenco2' element={<Lenco2 />} />
                <Route path='Talco' element={<Talco />} />


                <Route path='/Detalhes/:id' element={<Detalhes />} />
                <Route path='/Produtos' element={<Produtos />} />
                <Route path='/:id' element={<ProdutosPorCategoria />} />
                <Route path='/Beleza' element={<Beleza />} />
                <Route path='/BaseUltra' element={<BaseUltra />} />
                <Route path='/Batom' element={<Batom />} />
                <Route path='/Deliniador' element={<Deliniador />} />
                <Route path='/Demaquilante' element={<Demaquilante />} />
                <Route path='/Hidratante' element={<Hidratante />} />
                <Route path='/Paleta' element={<Paleta />} />
                <Route path='/Perfume1' element={<Perfume1 />} />
                <Route path='/Perfume4' element={<Perfume4 />} />
                <Route path='/ProtetorSolar' element={<ProtetorSolar />} />
                <Route path='/Rimel' element={<Rimel />} />


                <Route path='/Medicamentos' element={<Medicamentos />} />
                <Route path='/Acetilcisteína' element={<Acetilcisteína />} />
                <Route path='/Ambroxol' element={<Ambroxol />} />
                <Route path='/Complexob' element={<Complexob />} />
                <Route path='/Cystex' element={<Cystex />} />
                <Route path='/Declofenaco' element={<Declofenaco />} />
                <Route path='/Desloratadina' element={<Desloratadina />} />
                <Route path='/Dipirona' element={<Dipirona />} />
                <Route path='/Doricin' element={<Doricin />} />
                <Route path='/emsgrip' element={<Emsgrip />} />
                <Route path='/Simeticona' element={<Simeticona />} />


                <Route path='/Compra' element={<Compra />} />
            </Routes>

        </BrowserRouter>

    )
}