import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/CSS/App.css";
import Navb from "./View/Common/Navbar";
import Home from "./View/Home";
import Footer from "./View/Common/Footer";
import Login from "./View/Login";
import Register from "./View/Register";

function App() {
  //const [count, setCount] = useState([])

  return (
    <Router>
      <Navb></Navb>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>     
      <Footer></Footer>
    </Router>
  );
}

export default App;
