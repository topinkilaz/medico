import Navbar from './components/Navbar.tsx'
import './App.css'
import Home from './components/home.tsx'
import Team from './components/Team.tsx'
import Footer from './components/Footer.tsx'
import Description from './components/descripcion.tsx'
import Especialidades from './components/especiallidades.tsx'
import Services from './components/Services.tsx'
function App() {


  return (
    
    <>
    <Navbar/>
    <Home/>
    <Description/>
    <Especialidades/>
    <Services/>
    <Team/>
    <Footer/>
    
    </>
  )
}

export default App
