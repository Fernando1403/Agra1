import "../../css/style.css"

import imgConteudo from "../../assets/imagens/img-conteudo-sobre.jpg";

function Conteudo(){

    return(
      <article className="conteudo-sobre container">
        <div>
          <h1 className="font-1-xxl">sobre a <span className="cor-p3">AGRA.</span></h1>
          <p className="font-2-l cor-6">A AGRA é uma empresa de tecnologia que surgiu a partir de pesquisas feitas para buscar uma oportunidade de inovação no agronegócio, no qual vimos uma oportunidade de implementar um software/aplicativo, voltado para ajudar os agrônomos que compõe o mercado a massiva maioria do mercado agro.</p>
        </div>
        <img src={imgConteudo} alt=""/>
        <p className="font-2-l cor-6">Tivemos a iniciativa de começar a AGRA quando tivemos que realizar uma apresentação com o tema "O futuro da comida", então com o passar do tempo e mesmo após a apresentação, resolvemos aprofundar as pesquisas, e com base em nossas descobertas, tivemos a ideia de criar algo para aumentar o volume de produção, que possa ajudar  os agrônomos com tecnologia, pois acreditamos firmemente na importância da implementação da tecnologia nas áreas que possam ocorrer aplicações voltadas para auxiliar ao máximo as pessoas, e isso inclui um dos principais setores da sociedade.</p>
      </article>
    )

}

export default Conteudo;