import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import Medicamentos from "./pages/Medicamentos"
import Carrinho from './components/Carrinho'

import HPessoal from "./pages/HPessoal"
import Absorvente from './pages/HPessoal/Detalhes/Absorvente'
import Condicionador from './pages/HPessoal/Detalhes/Condicionador'
import CremeFacial from './pages/HPessoal/Detalhes/CremeFacial'
import DesoF from './pages/HPessoal/Detalhes/DesoF'
import DesoM from './pages/HPessoal/Detalhes/DesoM'
import EscovaColgate from './pages/HPessoal/Detalhes/EscovaColgate'
import EscovaDental from './pages/HPessoal/Detalhes/EscovaDental'
import Listerine from './pages/HPessoal/Detalhes/Listerine'
import PastaDental from './pages/HPessoal/Detalhes/PastaDental'
import Pasta from './pages/HPessoal/Detalhes/PastaDente'
import ProtetorNivea from './pages/HPessoal/Detalhes/ProtetorNivea'
import SaboneteLiq from './pages/HPessoal/Detalhes/SaboneteLiq'
import SaboneteProtex from './pages/HPessoal/Detalhes/SaboneteProtex'
import SaboneteDove from './pages/HPessoal/Detalhes/SaboneteDove'
import Shampoo1 from './pages/HPessoal/Detalhes/Shampoo'

import Baby from './pages/baby'
import Chupetas from './pages/baby/Detalhes/Chupetas'
import Fralda from './pages/baby/Detalhes/Fralda'
import MamaRosa from './pages/baby/Detalhes/MamaRosa'
import Rosa from './pages/baby/Detalhes/Rosa'
import Locao from './pages/baby/Detalhes/Locao'
import Pomada from './pages/baby/Detalhes/Pomada'
import Aptamil from './pages/baby/Detalhes/Aptamil'
import Kit from './pages/baby/Detalhes/kitAzul'
import Lenco from './pages/baby/Detalhes/lenco'
import Sabonete from './pages/baby/Detalhes/sabonete'
import ShampooJonhson from './pages/baby/Detalhes/ShampooJonhson'
import Sabao from './pages/baby/Detalhes/Sabao'
import Lenco2 from './pages/baby/Detalhes/Lenco2'
import Mamadeira from './pages/baby/Detalhes/mamadeira'
import Talco from './pages/baby/Detalhes/Talco'

import Beleza from "./pages/Beleza"
import Batom from './pages/Beleza/Detalhes/Batom'
import BaseUltra from './pages/Beleza/Detalhes/Baseultra'
import Deliniador from './pages/Beleza/Detalhes/Deliniador'
import Demaquilante from './pages/Beleza/Detalhes/Demaquilante'
import Esfoliante from './pages/Beleza/Detalhes/Esfoliante'
import EsmalteBranco from './pages/Beleza/Detalhes/EsmalteBranco'
import Esmaltepreto from './pages/Beleza/Detalhes/Esmaltepreto'
import Esmaltevermelho from './pages/Beleza/Detalhes/Esmaltevermelho'
import Gelsecativo from './pages/Beleza/Detalhes/Gelsecativo'
import Hidratante from './pages/Beleza/Detalhes/Hidratante'
import Paleta from './pages/Beleza/Detalhes/Paleta'
import Perfume1 from './pages/Beleza/Detalhes/Perfume1'
import Perfume2 from './pages/Beleza/Detalhes/Perfume2'
import Perfume3 from './pages/Beleza/Detalhes/Perfume3'
import Perfume4 from './pages/Beleza/Detalhes/Perfume4'
import ProtetorSolar from './pages/Beleza/Detalhes/ProtetorSolar'
import Rimel from './pages/Beleza/Detalhes/Rimel'
import Shampooacai from './pages/Beleza/Detalhes/Shampooacai'
import Shampookarite from './pages/Beleza/Detalhes/Shampookarite'
import Shampoomorango from './pages/Beleza/Detalhes/Shampoomorango'

import Acetilcisteína from'./pages/Medicamentos/Detalhes/Acetilcisteína'
import Allexofedrin from'./pages/Medicamentos/Detalhes/Allexofedrin'
import Ambroxol from'./pages/Medicamentos/Detalhes/Ambroxol'
import Carbocisteína from'./pages/Medicamentos/Detalhes/Carbocisteína'
import Complexob from'./pages/Medicamentos/Detalhes/Complexob'
import Condres from'./pages/Medicamentos/Detalhes/Condres'
import Cystex from'./pages/Medicamentos/Detalhes/Cystex'
import Declofenaco from'./pages/Medicamentos/Detalhes/Declofenaco'
import Desloratadina from'./pages/Medicamentos/Detalhes/Desloratadina'
import Dipirona from'./pages/Medicamentos/Detalhes/Dipirona'
import Doricin from'./pages/Medicamentos/Detalhes/Doricin'
import Dorspan from'./pages/Medicamentos/Detalhes/Dorspan'
import Emsgrip from './pages/Medicamentos/Detalhes/emsgrip'
import Fendizoato from'./pages/Medicamentos/Detalhes/Fendizoato'
import Gemax from'./pages/Medicamentos/Detalhes/Gemax'
import Ibuprofeno from'./pages/Medicamentos/Detalhes/Ibuprofeno'
import Paracetamol from'./pages/Medicamentos/Detalhes/Paracetamol'
import Simeticona from'./pages/Medicamentos/Detalhes/Simeticona'
import Sominex from'./pages/Medicamentos/Detalhes/Sominex'
import Suplevit from'./pages/Medicamentos/Detalhes/Suplevit'
import Compra from './components/Compra/Compra'

export default function Rotas() {
    return (
        <BrowserRouter >
            <Header />
            <Routes>
                
                <Route path='/HPessoal' element={<HPessoal />} />
                <Route path='/Absorvente' element={<Absorvente />} />
                <Route path='/Condicionador' element={<Condicionador />} />
                <Route path='/CremeFacial' element={<CremeFacial />} />
                <Route path='/DesoF' element={<DesoF />} />
                <Route path='/DesoM' element={<DesoM />} />
                <Route path='/EscovaColgate' element={<EscovaColgate />} />
                <Route path='/EscovaDental' element={<EscovaDental />} />
                <Route path='/Listerine' element={<Listerine />} />
                <Route path='/Pastadental' element={<PastaDental />} />
                <Route path='/Pastadente' element={<Pasta />} />
                <Route path='/ProtetorNivea' element={<ProtetorNivea />} />
                <Route path='/SaboneteLiq' element={<SaboneteLiq />} />
                <Route path='/SaboneteDove' element={<SaboneteDove />} />
                <Route path='/SaboneteProtex' element={<SaboneteProtex />} />
                <Route path='/Shampoo' element={<Shampoo1 />} />


                <Route path='/Cadastro' element={<Cadastro />} />
                <Route path='/' element={<Home />}/>
                <Route path='/Carrinho' element={<Carrinho />} />


                <Route path='/Baby' element={<Baby />} />
                <Route path='/Chupetas' element={<Chupetas />} />
                <Route path='/Fralda' element={<Fralda />} />
                <Route path='/MamaRosa' element={<MamaRosa />} />
                <Route path='/Rosa' element={<Rosa />} />
                <Route path='/Locao' element={<Locao />} />
                <Route path='/Pomada' element={<Pomada />} />
                <Route path='/Lenco' element={<Lenco />} />
                <Route path='/Aptamil' element={<Aptamil />} />
                <Route path='/Kit' element={<Kit />} />
                <Route path='/Sabonete' element={<Sabonete />} />
                <Route path='/ShampooJonhson' element={<ShampooJonhson />} />
                <Route path='/Sabao' element={<Sabao />} />
                <Route path='Lenco2' element={<Lenco2 />} />
                <Route path='Mamadeira' element={<Mamadeira />} />
                <Route path='Talco' element={<Talco />} />

                
                
                <Route path='/Beleza' element={<Beleza />} />
                <Route path='/BaseUltra' element={<BaseUltra />} />
                <Route path='/Batom' element={<Batom />} />
                <Route path='/Deliniador' element={<Deliniador />} />
                <Route path='/Demaquilante' element={<Demaquilante />} />
                <Route path='/Esfoliante' element={<Esfoliante />} />
                <Route path='/EsmalteBranco' element={<EsmalteBranco />} />
                <Route path='/Esmaltepreto' element={<Esmaltepreto />} />
                <Route path='/Esmaltevermelho' element={<Esmaltevermelho />} />
                <Route path='/Gelsecativo' element={<Gelsecativo />} />
                <Route path='/Hidratante' element={<Hidratante />} />
                <Route path='/Paleta' element={<Paleta />} />
                <Route path='/Perfume1' element={<Perfume1 />} />
                <Route path='/Perfume2' element={<Perfume2 />} />
                <Route path='/Perfume3' element={<Perfume3 />} />
                <Route path='/Perfume4' element={<Perfume4 />} />
                <Route path='/ProtetorSolar' element={<ProtetorSolar />} />
                <Route path='/Rimel' element={<Rimel />} />
                <Route path='/Shampooacai' element={<Shampooacai />} />
                <Route path='/Shampookarite' element={<Shampookarite />} />
                <Route path='/Shampoomorango' element={<Shampoomorango />} />


                <Route path='/Medicamentos' element={<Medicamentos />} />
                <Route path='/Acetilcisteína' element={<Acetilcisteína />} />
                <Route path='/Allexofedrin' element={<Allexofedrin />} />
                <Route path='/Ambroxol' element={<Ambroxol />} />
                <Route path='/Carbocisteína' element={<Carbocisteína />} />
                <Route path='/Complexob' element={<Complexob/>} />
                <Route path='/Condres' element={<Condres/>} />
                <Route path='/Cystex' element={<Cystex/>} />
                <Route path='/Declofenaco' element={<Declofenaco />} />
                <Route path='/Desloratadina' element={<Desloratadina/>} />
                <Route path='/Dipirona' element={<Dipirona />} />
                <Route path='/Doricin' element={<Doricin/>} />
                <Route path='/Dorspan' element={<Dorspan />} />
                <Route path='/emsgrip' element={<Emsgrip />} />
                <Route path='/Fendizoato' element={<Fendizoato />} />
                <Route path='/Gemax' element={<Gemax />} />
                <Route path='/Ibuprofeno' element={<Ibuprofeno />} />
                <Route path='/Paracetamol' element={<Paracetamol />} />
                <Route path='/Simeticona' element={<Simeticona />} />
                <Route path='/Sominex' element={<Sominex />} />
                <Route path='/Suplevit' element={<Suplevit />} />

                
                <Route path='/Compra' element={<Compra />} />
 </Routes>

        </BrowserRouter>

    )
}