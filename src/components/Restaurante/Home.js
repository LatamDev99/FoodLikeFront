import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registro  from "./Registro/Registro";
import Sesion from "./Sesion/Sesion";
import Home from "./Home/Home";
import Actualizar from "./Actualizar/Actualizar"
import Platillos from "./Platillos/Platillos";
import CrearPlatillo from "./CrearPlatillo/CrearPlatillo"
import AdministrarPlatillos from "./AdministrarPlatillos/AdministrarPlatillos";
import EditarPlatillo from "./AdministrarPlatillos/Platillo/EditarPlatillo";




function HomeRestaurante() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/restaurante/sesion" component={Sesion}/>
        <Route path="/restaurante/registro" component={Registro}/>
        <Route path="/restaurante/configuracion" component={Actualizar}/>
        <Route path="/restaurante/agregarplatillos" component={Platillos}/>
        <Route path="/restaurante/crearplatillo" component={CrearPlatillo}/>
        <Route path="/restaurante/administrarplatillos" component={AdministrarPlatillos}/>
        <Route path="/restaurante/editarplatillo" component={EditarPlatillo}/>
        <Route path="/restaurante" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default HomeRestaurante;