import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registro from "./Registro/Registro";
import Sesion from "./Sesion/Sesion";
import Home from "./Home/Home";
import Configuracion from "./Configuracion/Configuracion";
import CategoriaPlatillos from "./CategoriaPlatillos/CategoriaPlatillos";
import CrearPlatillo from "./CrearPlatillo/CrearPlatillo";
import AdministrarPlatillos from "./AdministrarPlatillos/AdministrarPlatillos";
import EditarPlatillo from "./AdministrarPlatillos/EditarPlatillo/EditarPlatillo";
import Footer from "./Footer/Footer";

function HomeRestaurante() {
  return (
    <BrowserRouter>
      <div style={{  minHeight: '100vh', position: 'relative' }}>
      
        <Switch>
          <Route path="/restaurante/sesion" component={Sesion} />
          <Route path="/restaurante/registro" component={Registro} />
          <Route path="/restaurante/configuracion" component={Configuracion} />
          <Route path="/restaurante/categoriaplatillo" component={CategoriaPlatillos} />
          <Route path="/restaurante/crearplatillo" component={CrearPlatillo} />
          <Route path="/restaurante/administrarplatillos" component={AdministrarPlatillos} />
          <Route path="/restaurante/editarplatillo" component={EditarPlatillo} />
          <Route path="/restaurante" component={Home} />
        </Switch>
       
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default HomeRestaurante;
