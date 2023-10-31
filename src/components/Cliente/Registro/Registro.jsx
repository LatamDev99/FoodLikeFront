import { useEffect, useState } from 'react'
import styles from "./Registro.module.css"
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
import logo from "../../../img/logoFoodLike.png"
import facebook from "../../../img/facebook-1-svgrepo-com.svg"
import google from "../../../img/google-color-svgrepo-com.svg"
import twitter from "../../../img/twitter-svgrepo-com.svg"

const Registro = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    })
    const onClickContinuar = () => {
        window.location.href = "/cliente/registroinfo";
      }
  return (
    loading ? <Loading/> :
    <div className={styles.conteiner}>
        <img src={logo} alt="" />
        <h3>Registrarse</h3>
        <span>Correo</span>
        <input type="text" />
        <span>Contraseña</span>
        <input type="password" />
        <span>Repetir Contraseña</span>
        <input type="password" />
        <Link to={"/cliente/sesion"}>Iniciar Sesion</Link>
        <div className={styles.icons}>
        <img className={styles.icon} src={facebook} alt="" />
        <img className={styles.icon} src={google} alt="" />
        <img className={styles.icon} src={twitter} alt="" />
        </div>
        <button onClick={onClickContinuar}>Continuar</button>
    </div>
  )
}

export default Registro