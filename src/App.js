import axios from "axios";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Branch from "./components/Branch/branch";


function App() {
  return (
   <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Branch} />
    </Switch>
   </BrowserRouter>
  );
}

export default App;
