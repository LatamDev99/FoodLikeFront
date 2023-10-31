import { useEffect, useState } from 'react'
import styles from "./Contraseña.module.css"
import logo from "../../../img/logoFoodLike.png"
import Loading from '../Loading/Loading'
import Perfil from "../../../img/profile-circle-svgrepo-com.svg"

const Actualizar = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    })
    const onClickContinuar = () => {
        window.location.href = "/cliente/sesion";
      }
  return (
    loading ? <Loading/> :
    <div className={styles.conteiner}>
         <img src={logo} alt="" />
         <img className={styles.perfil} src={Perfil} alt="" />
         <span>Nombre de Usuario</span>
         <span>Contraseña</span>
        <input type="password" />
        <span>Repetir Contraseña</span>
        <input type="password" />
        <button onClick={onClickContinuar}>Continuar</button>
    </div>
  )
}

export default Actualizar