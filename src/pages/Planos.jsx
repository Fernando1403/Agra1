import "../css/style.css"
import Header from "../interpolacao/global/header";
import Intro from "../interpolacao/planos/intro"
import PlanosOpcao from "../interpolacao/planos/planos-opcao-2";
import Vantagens from "../interpolacao/planos/vantagens";
import PerguntasFrequentes from "../interpolacao/planos/perguntas-frequentes";
import Footer from "../interpolacao/global/footer";

function Planos(){

    return(
        <div>
            <Header/>
            <Intro/>
            <PlanosOpcao/>
            <Vantagens/>
            <PerguntasFrequentes/>
            <Footer/>
        </div>
    )

}

export default Planos;