import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import Cadastro from "./pages/cadastro"
import CadastroUsuarios from "./pages/cadastroUsuarios"
import Usuarios from "./pages/usuarios"
import Nav from "./components/nav"
import Footer from "./components/footer"
import NotFound from "./pages/NotFound"
import Sobre from "./pages/sobre"
import Contato from "./pages/contato"
import Faq from "./pages/faq"


export default function router() {
  return (
     <BrowserRouter>
    <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/cadastroUsuarios" element={<CadastroUsuarios/>}/>
            <Route path="/usuarios" element={<Usuarios/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="*" element={<NotFound/>}/>


        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
