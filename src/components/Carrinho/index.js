import './carrinho.css'
import '../Header/header.css'
import manutencao from "./imagens/manutencao.png"

export default function Header() {
    return (
        <div>
          <h2>Carrinho</h2>
          <img src={manutencao} alt="Manutencao" />
            </div>
          )
}