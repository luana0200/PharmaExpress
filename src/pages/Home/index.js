import { Link } from 'react-router-dom'
import CarroselHome from '../../bootstrap/carroselHome.js'
import './estilo1.css'

import base from "../Beleza/imagens/base.png"
import batom from '../Beleza/imagens/batom.png'
import shampoo from '../Beleza/imagens/shampoomorango.png'
import rimel from '../Beleza/imagens/rimel.png'
import esmaltevermelho from '../Beleza/imagens/esmaltevermelho.png'
import perfume3 from '../Beleza/imagens/perfume3.png'
import saboneteliq from '../HPessoal/imagens H/sabonete liq.png'
import creme from '../HPessoal/imagens H/creme facial.webp'

// import visa12 from '../../components/Rodape/imagem/visa12.png'

export default function Home() {
    return (

        <div className='container-fluid'>
            <br />
            <CarroselHome />
            <br />

            <div className='container-fluid'>
                <div id='row'>
                    <div className='col-sm-2, col-md-5, col-lg-2'>
                        <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <img src={base} alt="Base" />
                        <h2>Base Líquida Ultra Matte</h2>
                        <h2>25ml</h2>
                        <Link to='/BaseUltra'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div classname='col-sm-12, col-md-10, col-lg-2'>
                        <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <img src={batom} alt="Batom" />
                        <h2>Batom Líquido Matte Tint</h2>
                        <h2>Rosé Vintage</h2>
                        <Link to='/Batom'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div className='col-sm-12, col-md-10, col-lg-2'>
                        <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <img src={esmaltevermelho} alt="esmalte vermelho" />
                        <h2>Esmalte Vermelho Sofisticado 7ml</h2><br />
                        <Link to='/Esmaltevermelho'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div className='col-sm-12, col-md-10, col-lg-2'>
                        <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <img src={shampoo} alt="shampoomorango" />
                        <h2>Combo Frutas Vermelhas</h2>
                        <br />
                        <Link to='/Shampoomorango'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>
                </div>

                <div id='row'>
                    <div className='col-sm'>
                        <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <img src={rimel} alt="Rimel" />
                        <h2>Máscara Para Cílios</h2>
                        <h2>Super Up 8mg</h2>
                        <Link to='/Rimel'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div className='col-sm'>
                        <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <img width="220px" src={saboneteliq} alt="sabonete liq" />
                        <h2> Sabonete Liquido Luz 200ml </h2> <br />

                        <Link to='/Saboneteliq'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div className='col-sm'>
                        <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <img width="220px" src={creme} alt="creme" />
                        <h2>Creme Facial 100 g </h2> <br />

                        <Link to='/CremeFacial'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>

                    <div className='col-sm'>
                        <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <img src={perfume3} alt="Perfume" />
                        <h2>La Victorie</h2>
                        <h2>Eau de Parfum 75ml</h2>
                        <Link to='/Perfume3'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}