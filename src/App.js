import NavBar from "./Components/NavBar/NavBar";
import Home from "./Views/Home";
import { Route } from "react-router-dom";



function App() {



  return (
    <div className="App">
      <NavBar />
      <Route exact path='/'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
