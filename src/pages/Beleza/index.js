import { Link } from 'react-router-dom'
import '../Beleza/Detalhes/bela.css'
import '../../../src/components/Rodape/rodape.css'

import base from "./imagens/base.png"
import batom from "./imagens/batom.png"
import delineador from "./imagens/delineador.png"
import paleta from "./imagens/paleta.png"
import rimel from "./imagens/rimel.png"
import perfume1 from "./imagens/perfume1.png"
import perfume2 from "./imagens/perfume2.png"
import hidratante from "./imagens/hidratante.png"
import perfume3 from "./imagens/perfume3.png"
import perfume4 from "./imagens/perfume4.png"
import protetorsolar from "./imagens/protetorsolar.png"
import gelsecativo from "./imagens/gelsecativo.png"
import demaquilante from "./imagens/demaquilante.png"
import esfoliante from "./imagens/esfoliante.png"
import shampoomorango from "./imagens/shampoomorango.png"
import shampooacai from "./imagens/shampooacai.png"
import shampookarite from "./imagens/shampookarite.png"
import esmaltepreto from "./imagens/esmaltepreto.png"
import esmaltevermelho from "./imagens/esmaltevermelho.png"
import esmaltebranco from "./imagens/esmaltebranco.png"
import visa12 from '../../components/Rodape/imagem/visa12.png'

export default function Beleza() {
    return (

        <div id="containerArea-principal">
            <div id='area-loja'><h1>BABY</h1></div>
            
                <div className='row'>

            <div class="col-3 containerPostagem">
                    <img src={base} alt="Base" />
                    <h2>Base Líquida Ultra Matte</h2>
                    <h2>25ml</h2>
                    <Link to='/BaseUltra'>
                        <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={batom} alt="Batom" />
                    <h2>Batom Líquido Matte Tint</h2>
                    <h2>Rosé Vintage</h2>
                    <Link to='/Batom'>
                        <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={delineador} alt="Deliniador" />
                    <h2>Deliniador Líquido Para Olhos</h2>
                    <h2>Preto Essencial  2,5ml</h2>
                    <Link to='/Deliniador'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={paleta} alt="Paleta" />
                    <h2>Palette de Sombras Crystal</h2>
                    <h2>Ninna Secrets 16,5g</h2>
                    <Link to='/Paleta'>
                    <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>



                <div class="postagem">
                    <img src={rimel} alt="Rimel" />
                    <h2>Máscara Para Cílios</h2>
                    <h2>Super Up 8mg</h2>
                    <Link to='/Rimel'>
                        <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>



                <div class="postagem">
                    <img src={perfume1} alt="Perfume" />
                    <h2>Desodorante Colônia</h2>
                    <h2>95ml</h2>
                    <Link to='/Perfume1'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={perfume2} alt="Perfume" />
                    <h2>Pulse Desodorante Côlonia</h2>
                    <h2>100ml</h2>
                    <Link to='/Perfume2'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={hidratante} alt="Hidratante" />
                    <h2>Loção Hidratante Desodorante</h2>
                    <h2>Corporal 150ml</h2>
                    <Link to='/Hidratante'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={perfume3} alt="Perfume" />
                    <h2>La Victorie</h2>
                    <h2>Eau de Parfum 75ml</h2>
                    <Link to='/Perfume3'>
                    <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={perfume4} alt="Perfume" />
                    <h2>Magnific Audaz</h2>
                    <h2>Eau de Parfum 75ml</h2>
                    <Link to='/Perfume4'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>



                <div class="postagem">
                    <img src={protetorsolar} alt="Protetor Solar" />
                    <h2>Protetor Solar Facial</h2>
                    <h2>FPS 50 50g</h2>
                    <Link to='/Protetor'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={gelsecativo} alt="Gel Secativo" />
                    <h2>Gel Secativo Pele com Acne</h2>
                    <h2>Ação Rápida 15g</h2>
                    <Link to='/Gelsecativo'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={demaquilante} alt="demaquilante" />
                    <h2>Demaquilante 100ml</h2>
                    <br />
                    <Link to='/Demaquilante'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={esfoliante} alt="Esfoliante" />
                    <h2>Máscara Esfoliante Enzimática</h2>
                    <h2>75g</h2>
                    <Link to='/Esfoliante'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={shampoomorango} alt="shampoomorango" />
                    <h2>Combo Frutas Vermelhas</h2>
                    <br />
                    <Link to='/Shampoomorango'>
                        <div className='promocao'>
                            <button>PROMOÇAO 10%</button>
                        </div>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>



                <div class="postagem">
                    <img src={shampooacai} alt="Shampoo Acai" />
                    <h2>Combo Açai e Bambu</h2>
                    <Link to='/Shampooacai'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={shampookarite} alt="Shampoo Karité" />
                    <h2>Combo Karité</h2>
                    <Link to='/Shampookarite'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={esmaltepreto} alt="Esmalte Preto" />
                    <h2>Esmalte Preto Essencial 7ml</h2>
                    <Link to='/Esmaltepreto'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="postagem">
                    <img src={esmaltevermelho} alt="esmalte vermelho" />
                    <h2>Esmalte Vermelho Sofisticado 7ml</h2>
                    <Link to='/Esmaltevermelho'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>


                <div class="postagem">
                    <img src={esmaltebranco} alt="Esmalte Branco" />
                    <h2>Esmalte Branco Intensific 7ml</h2>
                    <Link to='/EsmalteBranco'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
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
