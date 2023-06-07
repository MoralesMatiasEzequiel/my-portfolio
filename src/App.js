import "./App.module.css";
// import NavBar from "./Components/NavBar/NavBar";
import Home from "./Views/Home";
import { Route } from "react-router-dom";
import ParticlesBackground from "./Components/ParticlesBackground/ParticlesBackground";



function App() {



  return (
    <div className="App">
      <ParticlesBackground/>
      <Route exact path='/'>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
