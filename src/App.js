import "./App.css";
import Nav from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import SobreMi from "./components/SobreMi/SobreMi";
import Proyectos from "./components/Proyectos/Proyectos";
import Experiencie from "./components/Experiencie/Experiencie";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <SobreMi />
      <Proyectos />
      <Experiencie />
    </div>
  );
}

export default App;
