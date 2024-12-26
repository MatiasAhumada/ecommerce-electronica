import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/CSS/App.css";
import Navb from "./View/Common/Navbar";
import Home from "./View/Home";
import Footer from "./View/Common/Footer";
import QSomos from "./View/Qsomos";
import Login from "./View/Login";
import Register from "./View/Register";
import Garantia from "./View/Garantia";
import CargarEquipo from "./View/At. Clientes/CargarEquipo";
import CargaCobro from "./View/Cobranzas/CargaCobro";
import MuestraCobro from "./View/Cobranzas/MuestraCobro";

function App() {
  //const [count, setCount] = useState([])

  return (
    <Router>
      <Navb></Navb>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/qsomos" element={<QSomos></QSomos>}></Route>
        <Route path="/pagos" element={<CargaCobro></CargaCobro>}></Route>
        <Route path="/garantia" element={<Garantia></Garantia>}></Route>
        <Route path="/cargaequipo" element={<CargarEquipo></CargarEquipo>}></Route>
        <Route path="/cobro" element={<CargaCobro></CargaCobro>}></Route>
        <Route path="/mostrarCobro" element={<MuestraCobro></MuestraCobro>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
