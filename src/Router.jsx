import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import Carros from "./pages/carros"
import Nav from "./components/nav"

export default function router() {
  return (
     <BrowserRouter>
    <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Carros/>}/>
        </Routes>
    </BrowserRouter>
  )
}
