import Navbar from './components/Navbar.tsx'
import './App.css'
import Home from './components/home.tsx'

import Footer from './components/Footer.tsx'
import Description from './components/descripcion.tsx'
import Especialidades from './components/especialidades.tsx'
import Especialidades2 from './components/especialidades2.tsx'
import Especialidades3 from './components/especialidades3.tsx'
import AccordionElement from './components/accordion.tsx'
import Services from './components/Services.tsx'
import Contacto from './components/Contacto.tsx'

function App() {


  return (
    
    <>
    <Navbar/>
    <Home/>
    <Description/>
    <Especialidades/>
    <Especialidades2/>
    <Especialidades3/>
    <AccordionElement/>
    <Services/>
    <Contacto/>
    <Footer/>
    
    </>
  )
}

export default App
