import { Link } from 'react-router-dom'
import '../../../src/components/Rodape/rodape.css'

import acetilcisteína from "./imagens/acetilcisteína.png"
import allexofedrin from "./imagens/allexofedrin.png"
import ambroxol from "./imagens/ambroxol.png"
import carbocisteína from "./imagens/carbocisteína.png"
import complexo from "./imagens/complexo.png"
import condres from "./imagens/condres.png"
import cystex from "./imagens/cystex.png"
import declofenaco from "./imagens/declofenaco.png"
import desloratadina from "./imagens/desloratadina.png"
import dipirona from "./imagens/dipirona.png"
import doricin from "./imagens/doricin.png"
import dorspan from "./imagens/dorspan.png"
import emsgrip from "./imagens/emsgrip.png"
import fendizoato from "./imagens/fendizoato.png"
import gemax from "./imagens/gemax.png"
import ibuprofeno from "./imagens/ibuprofeno.png"
import paracetamol from "./imagens/paracetamol.png"
import simeticona from "./imagens/simeticona.jpg"
import sominex from "./imagens/sominex.png"
import suplevit from "./imagens/suplevit.png"

import visa12 from '../../components/Rodape/imagem/visa12.png'

export default function Medicamentos() {
    return (

        <div id="container-fluid">
        <div className='cabecalho' ><h1>MEDICAMENTOS</h1></div>

       {/* Inicio das postagens */}
            <div className='row'>

                <div class="col-3 containerPostagem">
                
                    <img src={acetilcisteína} alt="Acetilcisteína" />
                    <h2>Acetilcisteína 600mg </h2> 
                       <h2> EMS</h2>
                    <Link to='/Acetilcisteína'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>


              <div class="col-3 containerPostagem">
                    <img src={allexofedrin} alt="Allexofredrin" />
                    <h2>Allexofedrin 120mg 10 Comprimidos </h2>
                        <h2>EMS </h2>
                    <Link to='/Allexofedrin'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={ambroxol} alt="Ambroxol" />
                    <h2>Ambroxol  Xarope 120ml </h2>
                    <h2>EMS</h2>
                    <Link to='/Ambroxol'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={carbocisteína} alt="Carbocisteína" />
                    <h2>Carbocisteína Xarope 100ml </h2>
                        <h2>EMS</h2>
                    <Link to='/Carbocisteína'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>



                <div class="col-3 containerPostagem">
                    <img src={complexo} alt="Complexo b" />
                    <h2>Complexo B 100 Comprimidos </h2>
                    <h2>EMS</h2>
                    <Link to='/Complexob'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={condres} alt="Condres" />
                    <h2>Condres Colágeno 90 cápsulas</h2>
                    <h2>EMS</h2>
   
                    <Link to='/condres'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={doricin} alt="Doricin" />
                    <h2>Doricin  300mg 36 Comprimidos </h2>
                    <h2>EMS</h2>
                    <Link to='/Doricin'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={declofenaco} alt="Diclofenaco" />
                    <h2>Diclofenaco Gel Creme Com 60g </h2>
                    <h2>EMS</h2>
                    <Link to='/Declofenaco'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={desloratadina} alt="Desloratadina" />
                    <h2>Desloratadina 30 Comprimidos</h2>
                    <h2>EMS</h2>
                    <Link to='/Desloratadina'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={dipirona} alt="Dipirona" />
                    <h2>Dipirona Sódica  10ml </h2>
                    <h2>EMS</h2>
                    <Link to='/Dipirona'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={cystex} alt="Cystex" />
                    <h2>Cystex  15mg </h2>
                    <h2>EMS</h2>
                    <Link to='/Cystex'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={dorspan} alt="Dorspan" />
                    <h2> Dorspan  20ml </h2>
                    <h2>EMS</h2>
                    <Link to='/Dorspan'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={emsgrip} alt="Emsgrip" />
                    <h2>EMSGRIP Limão e Mel Sachê </h2>
                    <h2>EMS</h2>
                    <Link to='/Emsgrip'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={ibuprofeno} alt="Ibuprofeno" />
                    <h2>Ibuprofeno 200mg 20 Comprimidos </h2>
                    <h2>EMS</h2>
                    <Link to='/Ibuprofeno'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={gemax} alt="Gelmax" />
                    <h2>Gelmax Sabor Limão </h2>
                    <h2>EMS</h2>
                    <Link to='/Gemax'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={fendizoato} alt="Fendizoato" />
                    <h2>Fendizoato Xarope 120ml</h2>
                    <h2>EMS</h2>
                    <Link to='/Fendizoato'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={paracetamol} alt="Paracetamol" />
                    <h2>Paracetamol 750mg 20 Comprimidos</h2>
                    <h2>EMS</h2>
                    <Link to='/Paracetamol'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={simeticona} alt="Simeticona" />
                    <h2>Simeticona 15ml </h2>
                    <h2>EMS</h2>
                    <Link to='/Simeticona'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={sominex} alt="Sominex" />
                    <h2>Sominex Composto 20 Comprimidos </h2>
                    <h2>EMS</h2>
                    <Link to='/Sominex'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>

                <div class="col-3 containerPostagem">
                    <img src={suplevit} alt="Suplevit" />
                    <h2>Suplevit 30 Cápsulas </h2>
                    <h2>EMS</h2>
                    <Link to='/Suplevit'>
                        <button className='detalhes'>Detalhes</button>
                    </Link>
                </div>
            </div>

            <div id="rodape">
                <img src={visa12} alt="visa"/>

            <h5>Pharma Express| Rua Saint Martin 10-12| Bauru| São Paulo| CEP:17010-150| Horário de Atendimento: De Segunda à Domingo 
                    das 7h às 21h, inclusive feriado | Televendas: 1234-6985 | SAC – Serviço de Atendimento ao Cliente: 6985-3214, Dúvidas, elogios e reclamações:
                     atendimento@pharmaexpress.com.br.</h5><br />

                <p> <h5>Política de privacidade | © 2023 RD. Todos os direitos reservados.</h5> </p>
            </div>
        </div>
        



    )
}
