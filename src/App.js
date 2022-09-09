import './App.css';
import Nav from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import SobreMi from './components/SobreMi/SobreMi';
import Proyectos from './components/Proyectos/Proyectos';
import Contactos from './components/Contactos/Contactos';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Home/>
    <SobreMi/>
    <Proyectos/>
    <Contactos/>
    </div>    
  );
}

export default App;
