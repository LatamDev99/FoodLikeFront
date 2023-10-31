import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sesion from "./Sesion/Sesion";
import Registro from "./Registro/Registro";
import Preferencias from "./Preferencias/Preferencias";
import Recuperar from "./Contraseña/Recuperar";
import Actualizar from "./Contraseña/Actualizar";
import RegistroDetalles from "./Registro/RegistroDetalles";
import { useSelector } from "react-redux";
import Home from "./Home/Home";

function HomeCliente() {
  let nuevoUsuario = useSelector(state => state.nuevoUsuario)
  console.log(nuevoUsuario);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cliente/sesion" component={Sesion}/>
        <Route path="/cliente/registro" component={Registro}/>
        <Route path="/cliente/registroinfo" component={RegistroDetalles}/>
        <Route path="/cliente/preferencias" component={Preferencias}/>
        <Route path="/cliente/recuperar" component={Recuperar}/>
        <Route path="/cliente/actualizar" component={Actualizar}/>
        <Route path="/cliente" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default HomeCliente;
