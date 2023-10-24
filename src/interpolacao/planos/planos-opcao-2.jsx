import "../../css/style.css"


function PlanosOpcao(){

    return(
      <article className="planos-opcao-2 container">
        <div className="planos-opcoes">
          <div className="plano-opcao-todos">
              <h3 className="font-1-xl cor-12">BÁSICO</h3>

              <ul className="font-2-m cor-11">
                <li>Cadastro de Dados</li>
                <li>Sugestões para reduções de custo</li>
                <li>Blog</li>
                <li>Criação de Status</li>
              </ul>
              <a href="/planos" className="botao-planos botao-fundo-branco">Escolher plano</a>
          </div>
          <div className="plano-opcao-todos plano-avancado">
              <h3 className="font-1-xl cor-p3">AVANÇADO</h3>
              <span className="font-1-xl cor-0">R$69,90 <span className="font-1-xs cor-4">mensal</span></span>
              <ul className="font-2-m cor-0">
               <li>Cadastro de Dados</li>
                <li>Sugestões para reduções de custo</li>
                <li>Blog</li>
                <li>Criação de Status</li>
                <li>Gráficos Power BI</li>
                <li>Ajuda com funcionalidade do Software via WhatsApp</li>
              </ul>
              <a href="/planos" className="botao-planos botao-fundo-verde">Escolher plano</a>
          </div>
        </div>
      </article>
    )

}

export default PlanosOpcao;
