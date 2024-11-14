import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/CSS/App.css";
import Navb from "./View/Common/Navbar";
import Home from "./View/Home";
import Footer from "./View/Common/Footer";
import QSomos from "./View/Common/Qsomos";
import Login from "./View/Login";
import Register from "./View/Register";
import Pagos from "./View/Common/Pagos";
import Garantia from "./View/Common/Garantia";

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
        <Route path="/pagos" element={<Pagos></Pagos>}></Route>
        <Route path="/garantia" element={<Garantia></Garantia>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
