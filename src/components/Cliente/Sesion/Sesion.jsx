import { useEffect, useState } from 'react'
import styles from "./Sesion.module.css"
import logo from "../../../img/logoFoodLike.png"
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import facebook from "../../../img/facebook-1-svgrepo-com.svg"
import google from "../../../img/google-color-svgrepo-com.svg"
import twitter from "../../../img/twitter-svgrepo-com.svg"

const Sesion = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    })
  return (
    loading ? <Loading/> :
    <div className={styles.conteiner}>
        <img src={logo} alt="" />
        <h3>Iniciar Sesion</h3>
        <span>Correo</span>
        <input type="text" />
        <span>Contraseña</span>
        <input type="password" />
        <Link to={"/cliente/recuperar"}>Olvido la Contraseña?</Link>
        <Link to={"/cliente/registro"}>Registrarse</Link>
        <div className={styles.icons}>
        <img className={styles.icon} src={facebook} alt="" />
        <img className={styles.icon} src={google} alt="" />
        <img className={styles.icon} src={twitter} alt="" />
        </div>
        <button>Iniciar Sesion</button>
    </div>
  )
}

export default Sesion