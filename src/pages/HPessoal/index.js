import './estilo.css'
import { Link } from 'react-router-dom'
import '../../../src/components/Rodape/rodape.css'


import desoF from "./imagens H/desoF.webp"
import deso from "./imagens H/deso M.webp"
import shampoo from "./imagens H/shampoo.webp"
import condicionador from "./imagens H/Condicionador.webp"
import pasta from "./imagens H/pasta de dente C.jpeg"
import pastadental from "./imagens H/pasta dental.png"
import absorvente from "./imagens H/absorvente.webp"
import creme from "./imagens H/creme facial.webp"
import protetor from "./imagens H/protetor.webp"
import escovacarvao from "./imagens H/escova colgate carvao.jpg"
import listerine from "./imagens H/listerine.webp"
import escova from './imagens H/escova de dente.webp'
import sabonetedove from "./imagens H/sabonete dove.jpg"
import sabonete from "./imagens H/sabonete protex.webp"
import saboneteliq from "./imagens H/sabonete liq.png"
import visa12 from '../../components/Rodape/imagem/visa12.png'

export default function HPessoal() {

    return (

        <div id="container-fluid">
        <div ><h1>HIGIENE PESSOAL</h1></div>

       {/* Inicio das postagens */}
            <div className='row'>
                <div class="col-3 containerPostagem">
                    
                    <div class="col-3 containerPostagem">

                        <img width="220px" src={desoF} alt="desodorante" />
                        <h2>Desodorante Rexona Fem 200 ml</h2><br />

                        <Link to='/DesoF'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div class="col-3 containerPostagem">
                        <img width="220px" src={deso} alt="deso M" />
                        <h2> Desodorante Rexona Masc 200 ml</h2><br />

                        <Link to='/DesoM'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div class="col-3 containerPostagem">
                        <img width="220px" src={shampoo} alt="shampoo" />
                        <h2> Shampoo Pantene 450 ml </h2> <br />
                        <Link to='/Shampoo'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>

                    </div>

                    <div class="col-3 containerPostagem">
                        <img width="220px" src={condicionador} alt="condicionador" />
                        <h2> Condicionador Pantene 400 ml </h2> <br />
                        <Link to='/Condicionador'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div class="col-3 containerPostagem">
                        <img width="220px" src={pasta} alt="pasta" />
                        <h2> Pasta de Dente Colgate 90 g </h2> <br />
                        <Link to='/PastaDente'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div class="col-3 containerPostagem">
                        <img width="220px" src={pastadental} alt="pasta dental" />
                        <h2> Pasta de Dente Oral-B </h2> <br />
                        <Link to='/PastaDental'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div class="col-3 containerPostagem">
                        <img width="220px" src={absorvente} alt="absorvente" />
                        <h2>Absorvente 32 unidades </h2><br />
                        <Link to='/Absorvente'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div class="col-3 containerPostagem">
                        <img width="220px" src={creme} alt="creme" />
                        <h2>Creme Facial 100 g </h2> <br />
                        <Link to='/CremeFacial'>
                            <div className='promocao'>
                                <button>PROMOÇAO 10%</button>
                            </div>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div class="col-3 containerPostagem">
                        <img width="220px" src={protetor} alt="absorvente" />
                        <h2> Protetor Solar Nivea 200 ml </h2> <br />
                        <Link to='/Protetor'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div class="col-3 containerPostagem">
                        <img width="220px" src={sabonetedove} alt="sabonete dove" />
                        <h2>Sabonete Dove 85 g </h2> <br />
                        <Link to='/SaboneteDove'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>


                    <div class="col-3 containerPostagem">
                        <img width="220px" src={saboneteliq} alt="sabonete liq" />
                        <h2> Sabonete Liquido Luz 200ml </h2> <br />

                        <Link to='/Saboneteliq'>
                            <div className='promocao'>
                                <button>PROMOÇAO 10%</button>
                            </div>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>


                    <div class="col-3 containerPostagem">
                        <img width="220px" src={sabonete} alt="sabonete" />
                        <h2> Sabonete Protex em Barra 85 g </h2> <br />

                        <Link to='/SaboneteProtex'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>


                    <div class="col-3 containerPostagem">
                        <img width="220px" src={listerine} alt="listerine" />
                        <h2> Listerine 500 ml </h2> <br />

                        <Link to='/Listerine'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>


                    <div class="col-3 containerPostagem">
                        <img width="220px" src={escovacarvao} alt="escova de dente" />
                        <h2> Escova Dental Colgate 4 unidade </h2> <br />

                        <Link to='/EscovaColgate'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>


                    <div class="col-3 containerPostagem">
                        <img width="220px" src={escova} alt="escova de dente" />
                        <h2> Escova Dental  2 unidade </h2> <br />

                        <Link to='/EscovaDental'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div id="rodape">
                <img src={visa12} alt="visa" />

                <h5>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-150| Horário de Atendimento: De Segunda à Domingo
                    das 7h às 21h, inclusive feriado | Televendas: 1234-6985 | SAC – Serviço de Atendimento ao Cliente: 6985-3214, Dúvidas, elogios e reclamações:
                    atendimento@pharmaexpress.com.br.</h5><br />

                <p> <h5>Política de privacidade | © 2023 RD. Todos os direitos reservados.</h5> </p>
            </div>
        </div>

    )
}