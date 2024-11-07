import { useState } from 'react'

import '../src/CSS/App.css'
import Navb from './View/Common/Navbar'
import Home from './View/Home'
import Footer from './View/Common/Footer'

function App() {
  //const [count, setCount] = useState([])


  return (
    <>
    <Navb></Navb>
    <Home></Home>
    <Footer></Footer>
    </>
  )
}

export default App
