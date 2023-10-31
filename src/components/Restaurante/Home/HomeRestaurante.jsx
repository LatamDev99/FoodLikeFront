import styles from "./HomeRestaurante.module.css";
import React from "react";
import { FormularioRestaurante } from "./opciones/FormularioRestaurante.jsx";
import { useSelector } from "react-redux";
import RegistroRestaurante from "../Registro/RegistroRestaurante";




const HomeRestaurante = () => {

  const categoriasGuardadas = useSelector((state) => state.categoriasGuardadas);

return (
  <div className={styles.container}>
    <div className={styles.centeredObject}>

    <FormularioRestaurante/>
    {/* {categoriasGuardadas?.length===0 &&
               ||
              <RegistroRestaurante categoriasGuardadas={categoriasGuardadas}/>
    }     */}
    
    </div>
  </div>
)
}


export default HomeRestaurante