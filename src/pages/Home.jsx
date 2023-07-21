import "../css/style.css"

import Header from "../interpolacao/global/header";
import Intro from "../interpolacao/home/intro";
import MockupsApresentacao from "../interpolacao/home/apresentacao-mockups";
import PorqueNos from "../interpolacao/home/porque-nos";
import PlanosOpcao from "../interpolacao/planos/planos-opcao";
import Separador from "../interpolacao/home/separador-propaganda";
import Noticias from "../interpolacao/home/noticias";
import Footer from "../interpolacao/global/footer";

function Home(){

    return(
        <div>
            <Header/>
            <Intro/>
            <MockupsApresentacao/>
            <PorqueNos/>
            <PlanosOpcao/>
            <Separador/>
            <Noticias/>
            <Footer/>
        </div>
    )

}

export default Home;