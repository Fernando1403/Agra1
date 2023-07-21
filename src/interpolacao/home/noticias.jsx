import "../../css/style.css";

import imgNoticia from "../../assets/imagens/celeiro.jpg"
import imgNoticia2 from "../../assets/imagens/fazendeiro-plantando.jpg"

function Noticias(){

    return(
      <section aria-label="Notícias" className="noticias container">
        <h2 className="font-1-xxl">notícias<span className="cor-p3">.</span></h2>
        <div className="noticias-todos">
          <div className="noticias-tudo noticias-item-1">
            <img src={imgNoticia} alt=""/>
            <div>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Purus adipiscing tincidunt tincidunt justo ultricies. Adipiscing tincidunt biscas.Lorem ipsum dolor sit amet consectetur.</p>
              <a href="" className="font-1-s">Ver Notícias</a>
            </div>
          </div>
          <div className="noticias-items-2">
            <div className="noticias-tudo noticias-item-2">
              <img src={imgNoticia2} alt=""/>
              <div>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Purus adipiscing tincidunt tincidunt justo ultricies. Adipiscing tincidunt biscas.Lorem ipsum dolor sit amet consectetur.</p>
                <a href="" className="font-1-s">Ver Notícias</a>
              </div>
            </div>
            <div className="noticias-items-3">
              <div className="noticias-tudo noticias-item-3">
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Purus adipiscing tincidunt.</p>
                  <a href="" className="font-1-s">Ver Notícias</a>
                </div>
              </div>
              <div className="noticias-tudo noticias-item-3">
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Purus adipiscing tincidunt.</p>
                  <a href="" className="font-1-s">Ver Notícias</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )

}

export default Noticias;