import Navbar from './components/Navbar.tsx'
import './App.css'
import Home from './components/home.tsx'

import Footer from './components/Footer.tsx'
import Description from './components/descripcion.tsx'
import Especialidades from './components/especialidades.tsx'
import Especialidades2 from './components/especialidades2.tsx'
import Especialidades3 from './components/especialidades3.tsx'
function App() {


  return (
    
    <>
    <Navbar/>
    <Home/>
    <Description/>
    <Especialidades/>
    <Especialidades2/>
    <Especialidades3/>
   
    <Footer/>
    
    </>
  )
}

export default App
