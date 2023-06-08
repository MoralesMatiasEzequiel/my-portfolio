import style from "./App.module.css";
// import NavBar from "./Components/NavBar/NavBar";
import Home from "./Views/Home";
import { Route } from "react-router-dom";
import ParticlesBackground from "./Components/ParticlesBackground/ParticlesBackground";



function App() {



  return (
    <div className="App">
      <Route exact path='/'>
        <Home/>
      </Route>
      <div className={style.particles}>
      <ParticlesBackground/>
      </div>
    </div>
  );
}

export default App;
