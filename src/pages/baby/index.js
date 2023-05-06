import { Link } from 'react-router-dom'
import '../../../src/components/Rodape/rodape.css'


import ShampooJonhson from "./imagens/ShampooJonhson.webp"
import Mamadeira from "./imagens/Mamadeira Rosa.jpg"
import Lenco from "./imagens/Lenco umidecido.png"
import Fralda from "./imagens/Fralda.webp"
import Sabonet from "./imagens/Sabonet Liquido.webp"
import Pomada from "./imagens/Pomada.webp"
import Chupetas from "./imagens/Chupetas.png"
import Formula from "./imagens/Formula Aptamil.webp"
import Kit from "./imagens/Kit Escova Azul.jpg"
import Locao from "./imagens/Locao hidratante.jpg"
import Rosa from "./imagens/Rosa.webp"
import talco from './imagens/Talco.jpg'
import lenco from "./imagens/lenco humidecido.png"
import mama from "./imagens/mama azul.webp"
import sbonete from "./imagens/sbonete barra.webp"
import visa12 from '../../components/Rodape/imagem/visa12.png'

export default function Baby() {
    return (
        <div id="container-fluid">
            <div className='cabecalho' ><h1>BABY</h1></div>

            {/* Inicio das postagens */}
            <div className='row'>

                <div class="col-3 containerPostagem">
                    <img width="220px" src={Locao} alt="Locao" />
                    <h2>
                        Loção hidratante Jonhson baby <br />
                        <Link to='/Locao'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>


                <div class="col-3 containerPostagem">
                    <img width="220px" src={ShampooJonhson} alt="Shampoo" />
                    <h2>
                        Shampoo Jonhson baby 200 ml<br />
                        <Link to='/ShampooJonhson'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>

                <div class="col-3 containerPostagem">
                    <img width="220px" src={Mamadeira} alt="Mamadeira" />
                    <h2>
                        Mamadeira Rosa 250 ml<br />
                        <Link to='/MamaRosa'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>

                <div class="col-3 containerPostagem">
                    <img width="110px" src={Lenco} alt="Lenco" />
                    <h2>
                        Lenço Umidecido Jonhson Baby <br />
                        <Link to='/Lenco'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>

                <div class="col-3 containerPostagem">
                    <img width="110px" src={Fralda} alt="Fralda" />
                    <h2>
                        Fralda Pampers <br />
                        <Link to='/Fralda'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>


                <div class="col-3 containerPostagem">
                    <img width="110px" src={Sabonet} alt="Sabonet" />
                    <h2>
                        Sabonete Liquido Jonhson baby <br />
                        <Link to='/Sabao'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>

                <div class="col-3 containerPostagem">
                    <img width="110px" src={Pomada} alt="Pomada" />
                    <h2>
                        Pomada Hipogloss<br />
                        <Link to='/Pomada'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>

                <div class="col-3 containerPostagem">
                    <img width="110px" src={Chupetas} alt="Chupetas" />
                    <h2>
                        Chupetas<br />
                        <Link to='/Chupetas'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>

                <div class="col-3 containerPostagem">
                    <img width="110px" src={Formula} alt="Formula" />
                    <h2>
                        Formula Aptamil <br />
                        <Link to='/Aptamil'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>

                <div class="col-3 containerPostagem">
                    <img width="110px" src={lenco} alt="lenco" />
                    <h2>
                        Lenço Umidecido  Pampers <br />
                        <Link to='/lenco2'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>

                <div class="col-3 containerPostagem">
                    <img width="110px" src={Rosa} alt="Rosa" />
                    <h2>
                        Kit Escova Rosa<br />
                        <Link to='/rosa'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>



                <div class="col-3 containerPostagem">
                    <img width="110px" src={Kit} alt="Kit Azul" />
                    <h2>
                        Kit Escova Azul<br />
                        <Link to='/kit'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>

                <div class="col-3 containerPostagem">
                    <img width="110px" src={mama} alt="mama" />
                    <h2>
                        Mamadeira Azul 250 ml<br />
                        <Link to='/Mamadeira'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>


                <div class="col-3 containerPostagem">
                    <img width="110px" src={sbonete} alt="sabonete" />
                    <h2>
                        Sabonete em Barra Jonhson Baby <br />
                        <Link to='/Sabonete'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
                </div>

                <div class="col-3 containerPostagem">
                    <img width="110px" src={talco} alt='talco' />
                    <h2>
                        Talco Johnson <br />
                        <Link to='/talco'>
                            <button className='detalhes'>Detalhes</button>
                        </Link>
                    </h2>
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