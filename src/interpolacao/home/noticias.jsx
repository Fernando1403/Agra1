import "../../css/style.css";

import imgNoticia from "../../assets/imagens/cafe.webp"
import imgNoticia2 from "../../assets/imagens/fazendeiro-plantando.jpg"

function Noticias(){

    return(
      <section aria-label="Notícias" className="noticias container">
        <h2 className="font-1-xxl">notícias<span className="cor-p3">.</span></h2>
        <div className="noticias-todos">
          <div className="noticias-tudo noticias-item-1">
            <img src={imgNoticia} alt=""/>
            <div>
              <h3>Brasil deve ter 3ª maior safra de café da história, diz Conab</h3>
              <p>O Brasil colheu em 2023 a sua terceira maior safra de café da história, apesar de uma quebra na produção de grãos canéforas, que foi mais do que compensada por um salto na colheita do arábica, variedade que domina os cafezais brasileiros, estimou nesta quarta-feira (20) a Companhia Nacional de Abastecimento (Conab).</p>
              <a href="https://www.cnnbrasil.com.br/economia/brasil-deve-ter-3a-maior-safra-de-cafe-da-historia-diz-conab/" target="_blank" className="font-1-s">Ver Notícias</a>
            </div>
          </div>
          <div className="noticias-items-2">
            <div className="noticias-tudo noticias-item-2">
              <img src={imgNoticia2} alt=""/>
              <div>
                <h3>Arroz dispara 23% e volta ao patamar da pandemia.</h3>
                <p>Desde junho, o preço da saca de 50 quilos já subiu 23%. Clima no RS é uma das causas.</p>
                <a href="https://www.cnnbrasil.com.br/economia/arroz-dispara-23-e-volta-ao-patamar-da-pandemia-clima-no-rs-e-uma-das-causas/" target="_blank" className="font-1-s">Ver Notícias</a>
              </div>
            </div>
            <div className="noticias-items-3">
              <div className="noticias-tudo noticias-item-3">
                <div>
                  <h3>Safra 2022/2023</h3>
                  <p>Safra 2022/2023 deve alcançar recorde de 322,75 milhões de toneladas de grãos, diz Conab.</p>
                  <a href="https://www.cnnbrasil.com.br/economia/safra-2022-2023-deve-alcancar-recorde-de-32275-milhoes-de-toneladas-de-graos-diz-conab/" target="_blank" className="font-1-s">Ver Notícias</a>
                </div>
              </div>
              <div className="noticias-tudo noticias-item-3">
                <div>
                  <h3>Queda menor do Agro</h3>
                  <p>No PIB do 2º tri surpreende e mostra setor forte, dizem economistas.</p>
                  <a href="https://www.cnnbrasil.com.br/economia/queda-menor-do-agro-no-no-pib-do-2o-tri-surpreende-e-mostra-setor-forte-dizem-economistas/" target="_blank" className="font-1-s">Ver Notícias</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )

}

export default Noticias;