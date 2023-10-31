import styles from "./HomeRestaurante.module.css";
import React from "react";
import { OpcionesCategoria } from "./opciones/opcionesCategoria.jsx";

const HomeRestaurante = () => {


return (
  <div className={styles.container}>
    <div className={styles.centeredObject}>
    <OpcionesCategoria/>    
    </div>
  </div>
)
}


export default HomeRestaurante