import "../../css/style.css"

function PerguntasFrequentes(){

    return(
      <article className="perguntas container">
        <h2 className="font-1-xxl">perguntas frequentes<span className="cor-p3">.</span></h2>
        <dl>
          <div>
            <dt><button className="font-1-m-b" aria-controls="pergunta1" aria-expanded="true">Quais recursos e funcionalidades estão disponíveis no software da AGRA para auxiliar na gestão agrícola?</button></dt>
            <dd id="pergunta1" className="font-2-s cor-9 ativa">Nossos principais recursos que podem auxiliar na gestão agrícola são a análise de dados que oferecemos que entrega diversos dados relevantes para a gestão do negócio, sugestões de maximizar seu negócio e reduções de custos para o usuário.</dd>
          </div>
          <div>
            <dt><button className="font-1-m-b" aria-controls="pergunta2" aria-expanded="false">A AGRA oferece treinamento e suporte para utilização do software? Como funciona esse processo?</button></dt>
            <dd id="pergunta2" className="font-2-s cor-9">Mesmo disponibilizando uma interface simples e de fácil acesso, ainda sim nos comprometemos a auxiliar com qualquer dúvida referente ao funcionamento do software, basta somente entrar em contato conosco via e-mail ou WhatsApp.</dd>
          </div>
          <div>
            <dt><button className="font-1-m-b" aria-controls="pergunta3" aria-expanded="false">Qual é a abordagem da AGRA em relação à sustentabilidade e práticas agrícolas ambientalmente amigáveis?</button></dt>
            <dd id="pergunta3" className="font-2-s cor-9">Mesmo tendo um objetivo de maximizar e aumentar o volume de produção dos agrônomos, nos comprometemos a somente sugerir medidas que sejam sustentáveis e não prejudiciais ao meio ambiente.</dd>
          </div>
          <div>
            <dt><button className="font-1-m-b" aria-controls="pergunta4" aria-expanded="false">Quais são os custos associados à implementação e uso do software da AGRA?</button></dt>
            <dd id="pergunta4" className="font-2-s cor-9">Os únicos custos associados ao nosso software é sua assinatura, que depende da escolha de seu plano, lembrando que dependendo do plano, os serviços disponíveis não são os mesmos.</dd>
          </div>
          <div>
            <dt><button className="font-1-m-b" aria-controls="pergunta5" aria-expanded="false">Qual é a usabilidade e a interface do usuário do software da AGRA? É fácil de aprender e utilizar?</button></dt>
            <dd id="pergunta5" className="font-2-s cor-9">Sim, como citamos anteriormente, um de nossos diferenciais é a fácil utilização do software que é possível devido a interface simples que foi desenvolvida, assim sendo algo fácil e prático de se utilizar.</dd>
          </div>
          <div>
            <dt><button className="font-1-m-b" aria-controls="pergunta6" aria-expanded="false">O software da AGRA permite a geração de relatórios personalizados para acompanhar o status das plantações?</button></dt>
            <dd id="pergunta6" className="font-2-s cor-9">Sim, em nosso software temos a criação de relatórios que mostram e entregam dados referentes ao status da plantação, assim deixando o usuário atualizado e informado sobre o estado de seus produtos com base nos dados entregues.</dd>
          </div>
        </dl>
      </article>
    )

}

export default PerguntasFrequentes;

