import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import Cadastro from "./pages/cadastro"
import Nav from "./components/nav"
import NotFound from "./pages/NotFound"


export default function router() {
  return (
     <BrowserRouter>
    <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="*" element={<NotFound/>}/>


        </Routes>
    </BrowserRouter>
  )
}
