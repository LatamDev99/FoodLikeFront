import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Branch from "./components/Branch/branch";
import HomeCliente from "./components/Cliente/Home";
import HomeRestaurante from "./components/Restaurante/Home/HomeRestaurante";
import RegistroRestaurante from "./components/Restaurante/Registro/RegistroRestaurante";





function App() {
  return (
   <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Branch} />
    <Route path="/cliente" component={HomeCliente}/>
    <Route path="/restaurante" component={HomeRestaurante}/>
    <Route path="/registrorestaurante" component={RegistroRestaurante}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
