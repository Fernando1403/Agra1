import "../../css/style.css"

import InterfaceSimples from "../../assets/icones/interface-simples.svg"
import FacilAcesso from "../../assets/icones/facil-acesso.svg"
import Informacoes from "../../assets/icones/informacoes.svg"
import Sugestoes from "../../assets/icones/sugestoes.svg"
import ReducaoCustos from "../../assets/icones/reducao-custos.svg"
import ServicoCompleto from "../../assets/icones/servico-completo.svg"

function Vantagens(){

    return(
      <article className="vantagens-bg">
        <div className="vantagens container">
          <h2 className="font-1-xxl cor-0">vantagens<span className="cor-p3">.</span></h2>
          <div className="todas-vantagens">
            <div>
              <img src={InterfaceSimples} alt="" />
              <h3 className="font-1-l cor-2">Interface Simples</h3>
              <p className="cor-5 font-2-m">Nosso aplicativo possui uma interface simples, para que tenha um fácil acesso as informações e recebimento dos dados que serão analisados.</p>
            </div>
            <div>
              <img src={FacilAcesso} alt="" />
              <h3 className="font-1-l cor-2">Fácil Acesso</h3>
              <p className="cor-5 font-2-m">Teremos também diversas formas de se reduzir gastos sendo com produtos, transportes, etc.</p>
            </div>
            <div>
              <img src={Informacoes} alt="" />
              <h3 className="font-1-l cor-2">Informações</h3>
              <p className="cor-5 font-2-m">Nosso software também oferece um blog que nele temos diversas notícias referente às novidades do mercado agro.</p>
            </div>
            <div>
              <img src={Sugestoes} alt="" />
              <h3 className="font-1-l cor-2">Sugestões</h3>
              <p className="cor-5 font-2-m">Em nosso software, teremos diversas sugestões que o usuário poderá ver e analisar se deve ou não aplicar em suas plantações.</p>
            </div>
            <div>
              <img src={ReducaoCustos} alt="" />
              <h3 className="font-1-l cor-2">Redução de Custos</h3>
              <p className="cor-5 font-2-m">Teremos também diversas formas de se reduzir gastos sendo com produtos, transportes, etc.</p>
            </div>
            <div>
              <img src={ServicoCompleto} alt="" />
              <h3 className="font-1-l cor-2">Serviço Completo</h3>
              <p className="cor-5 font-2-m">Por meio de sua assinatura, oferecemos o serviço completo para que dessa forma você possa de acordo com sua necessidade ter a melhor utilização do software.</p>
            </div>
          </div>
        </div>
      </article>
    )

}

export default Vantagens;