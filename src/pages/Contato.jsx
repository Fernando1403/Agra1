import "../css/style.css";
import Header from "../interpolacao/global/header";
import Intro from "../interpolacao/contato/intro"
import Conteudo from "../interpolacao/contato/conteudo-contato"
import Footer from "../interpolacao/global/footer";

function Contato(){

    return(
        <div>
            <Header/>
            <Intro/>
            <Conteudo/>
            <Footer/>
        </div>
    )

}

export default Contato;