import axios from "axios";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Branch from "./components/Branch/branch";
import HomeCliente from "./components/Cliente/Home";


function App() {
  return (
   <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Branch} />
    <Route path="/cliente" component={HomeCliente}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
