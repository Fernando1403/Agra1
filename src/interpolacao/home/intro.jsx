import "../../css/style.css";

function Intro(){

    return(
      <main className="intro-bg">
        <div className="intro">
          <span className="info-contato">Contato Rápido para qualquer tipo de dúvida. <a href="/contato">Nosso contato</a></span>
          <h1 className="titulo-intro font-1-xxl cor-0">AGRA - Tecnologia com facilidade.</h1>
          <p className="texto-intro font-2-l cor-4">Potencialize seu negócio agrícola com nosso software de análise de dados voltados para você, agrônomo. Se informe sobre as novidades do mercado e maximize a  sua eficiência.</p>
          <div className="btns-intro">
            <a href="/planos" className="btn-branco font-1-m-b">Confira nossos Planos</a>
            <a href="/sobre" className="link-sobre font-1-m-b cor-0">Sobre Nós</a>
          </div>
        </div>
      </main>
    )

}

export default Intro;