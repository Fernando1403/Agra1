import "../../css/style.css"

function MissaoVisaoValores(){

    return(
      <section aria-label="Missão, Visão e Valores." className="cards-sobre container">
        <div className="card-sobre missao-sobre">
          <h3 className="font-1-l titulo-missao">Missão</h3>
          <p className="font-2-s cor-6">Nossa missão é auxiliar os agrônomos, para consequentemente aumentarmos o volume de produção do agronegócio.</p>
        </div>
        <div className="card-sobre missao-sobre">
          <h3 className="font-1-l titulo-visao">Visão</h3>
          <p className="font-2-s cor-6">Nossa visão é que a tecnologia chegou e está aqui para nos auxiliar em todas as áreas possíveis.</p>
        </div>
        <div className="card-sobre missao-sobre">
          <h3 className="font-1-l titulo-valores">Valores</h3>
          <p className="font-2-s cor-6">Nossos valores são inovação, excelência, sustentabilidade, ética, colaboração e impacto, sempre agregar positivamente</p>
        </div>
      </section>
    )

}

export default MissaoVisaoValores;