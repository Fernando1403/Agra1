import "../../css/style.css"

import logo from "../../assets/agra.svg";
import instagram from "../../assets/redes/instagram.svg"
import facebook from "../../assets/redes/facebook.svg"

function Footer(){

    return(
      <footer className="footer-bg">
        <div className="footer container">
          <img src={logo} alt="AGRA"/>
          <div className="footer-contato">
            <h3 className="font-2-l-b cor-0">Contato</h3>
            <ul className="font-2-m cor-5">
              <li><a href="tel:+551199999999">+55 11 9999-9999</a></li>
              <li><a href="mailto:contato@agra.com">contato@contato.com</a></li>
            </ul>
            <div className="footer-redes">
              <a href="/"><img src={instagram} alt="instagram" /></a>
              <a href="/"><img src={facebook} alt="facebook" /></a>
            </div>
          </div>
          <div className="footer-informacoes">
            <h3 className="font-2-l-b cor-0">Informações</h3>
            <nav className="">
              <ul className="font-1-m cor-5">
                <li><a href="/">Início</a></li>
                <li><a href="/sobre">Sobre Nós</a></li>
                <li><a href="/planos">Planos</a></li>
                <li><a href="/contato">Contato</a></li>
              </ul>
            </nav>
          </div>
          <p className="footer-copy font-2-m cor-6">AGRA © Todos os direitos reservados.</p>
        </div>
      </footer>
    )

}

export default Footer;