import "../../css/style.css"

import logo from "../../assets/agra.svg"

function Header(){

    return(
      <header className="header-bg">
        <div className="header container">
          <a href="/"><img src={logo} className="logo" alt="Farmacy" /></a>
          <nav>
            <ul className="header-menu font-1-m cor-0">
              <li><a href="/sobre">Sobre Nós</a></li>
              <li><a href="/planos">Planos</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )

}

export default Header;