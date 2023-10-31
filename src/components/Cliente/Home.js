import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sesion from "./Sesion/Sesion";
import Registro from "./Registro/Registro";
import Preferencias from "./Preferencias/Preferencias";
import Recuperar from "./Contraseña/Recuperar";
import Actualizar from "./Contraseña/Actualizar";
import RegistroDetalles from "./Registro/RegistroDetalles";

function HomeCliente() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cliente/sesion" component={Sesion}/>
        <Route path="/cliente/registro" component={Registro}/>
        <Route path="/cliente/registroinfo" component={RegistroDetalles}/>
        <Route path="/cliente/preferencias" component={Preferencias}/>
        <Route path="/cliente/recuperar" component={Recuperar}/>
        <Route path="/cliente/actualizar" component={Actualizar}/>
      </Switch>
    </BrowserRouter>
  );
}

export default HomeCliente;
