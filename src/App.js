import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Branch from "./components/Branch/branch";
import HomeCliente from "./components/Cliente/Home";
import HomeRestaurante from './components/Restaurante/Home';


function App() {
  return (
   <BrowserRouter>
    <div id="app-container"></div>
    <Switch>
    <Route exact path="/" component={Branch} />
    <Route path="/cliente" component={HomeCliente}/>
    <Route path="/restaurante" component={HomeRestaurante}/>
    </Switch>  
    <div/>
   </BrowserRouter>
  );
}

export default App;
