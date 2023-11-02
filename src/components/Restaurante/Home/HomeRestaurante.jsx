import styles from "./HomeRestaurante.module.css";
import React, { useEffect, useState } from "react";
import { FormularioRestaurante } from "./formulario/FormularioRestaurante.jsx";
import { useSelector } from "react-redux";
import RegistroRestaurante from "../Registro/RegistroRestaurante";
import Loading from "../Loading/Loading";




const HomeRestaurante = () => {
  const [loading, setLoading] = useState(true)

  const categoriasGuardadas = useSelector((state) => state.categoriasGuardadas);

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 1000);
  })


return (
  loading ? <Loading/> :
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