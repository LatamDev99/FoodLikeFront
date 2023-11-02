import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Registro } from "./Registro/Registro";
import Sesion from "./Sesion/Sesion";


function HomeRestaurante() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/restaurante/sesion" component={Sesion}/>
          <Route path="/restaurante/registro" component={Registro}/>
          
          {/* <Route path="/restaurante" component={Home}/> */}
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default HomeRestaurante;