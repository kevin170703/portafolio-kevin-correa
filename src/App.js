import "./App.css";
import Nav from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import SobreMi from "./components/SobreMi/SobreMi";
import Proyectos from "./components/Proyectos/Proyectos";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <SobreMi />
      <Proyectos />
    </div>
  );
}

export default App;
