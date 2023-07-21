import "../css/style.css"
import Header from "../interpolacao/global/header";
import Intro from "../interpolacao/sobre-nos/intro"
import Conteudo from "../interpolacao/sobre-nos/conteudo"
import MVV from "../interpolacao/sobre-nos/missao-visao-valores"
import Footer from "../interpolacao/global/footer";

function Sobre(){

    return(
        <div>
            <Header/>
            <Intro/>
            <Conteudo/>
            <MVV/>
            <Footer/>
        </div>
    )

}

export default Sobre;