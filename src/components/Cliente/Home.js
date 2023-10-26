import { BrowserRouter, Route, Switch } from "react-router-dom";

function HomeCliente() {
    return (
     <BrowserRouter>
      <Switch>
      <Route exact path="/cliente" />
      </Switch>
     </BrowserRouter>
    );
  }
  
  export default HomeCliente;