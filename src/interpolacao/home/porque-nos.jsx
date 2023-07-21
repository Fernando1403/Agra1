import "../../css/style.css";

import tratorHome from "../../assets/imagens/trator-home.jpg";

function PorqueNos(){

    return(
      <article className="porque-nos-bg">
        <div className="porque-nos container">
          <div className="porque-nos-conteudo">
            <span className="font-2-l-b cor-5">Porque escolher nós</span>
            <h2 className="font-1-xxl cor-0">solução inteligente e estratégica para o seu negócio<span className="cor-p3">.</span></h2>
            <p className="font-2-l cor-5">A ideia da nossa empresa surgiu após algumas pesquisas do nosso grupo sobre o futuro da comida, e assim vimos uma grande oportunidade de explorar o agronegócio, após diversas pesquisas, identificamos que é necessário uma maior aplicação da tecnologia no mercado agro, com o intuito de informar os agrônomos e maximizar esse setor essencial do nosso país.</p>
            <a href="/sobre" className="link-historia">nossa historia</a>
          </div>
          <div className="porque-nos-imagem">
            <img src={tratorHome} alt="Trator em uma plantação." />
          </div>
        </div>
      </article>
    )

}

export default PorqueNos;