import Navbar from './components/Navbar.tsx'
import './App.css'
import Home from './components/home.tsx'
import Team from './components/Team.tsx'
import Footer from './components/Footer.tsx'
import Contenido from './components/Contenido.tsx'
import Description from './components/descripcion.tsx'
import Especialidades from './components/especiallidades.tsx'
function App() {


  return (
    
    <>
    <Navbar/>
    <Home/>
    <Description/>
    <Contenido/>
    <Especialidades/>
    <Team/>
    <Footer/>
    
    </>
  )
}

export default App
