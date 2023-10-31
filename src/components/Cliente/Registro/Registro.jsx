import { useEffect, useState } from 'react'
import styles from "./Registro.module.css"
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
import logo from "../../../img/logoFoodLike.png"
import facebook from "../../../img/facebook-1-svgrepo-com.svg"
import google from "../../../img/google-color-svgrepo-com.svg"
import twitter from "../../../img/twitter-svgrepo-com.svg"
import { useDispatch } from 'react-redux'
import { guardarNuevoUsuario } from '../../../actions'

const Registro = () => {
    const [loading, setLoading] = useState(true)
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [repetirContraseña, setRepetirContrasena] = useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    })
    const onClickContinuar = async() => {
        let crearUsuario = {
            correo: correo, 
            contrasena: contrasena
        }
        dispatch(guardarNuevoUsuario(crearUsuario))
      }
    const onChangeCorreo = (e) => {
        setCorreo(e.target.value)
    }
    const onChangeContrasena = (e) => {
        setContrasena(e.target.value)
    }
    const onChangeRepetirContrasena = (e) => {
        setRepetirContrasena(e.target.value)
    }
  return (
    loading ? <Loading/> :
    <div className={styles.conteiner}>
        <img src={logo} alt="" />
        <h3>Registrarse</h3>
        <span>Correo</span>
        <input type="text" value={correo} onChange={onChangeCorreo}/>
        <span>Contraseña</span>
        <input type="password" value={contrasena} onChange={onChangeContrasena}/>
        <span>Repetir Contraseña</span>
        <input type="password" value={repetirContraseña} onChange={onChangeRepetirContrasena}/>
        <Link to={"/cliente/sesion"}>Iniciar Sesion</Link>
        <div className={styles.icons}>
        <img className={styles.icon} src={facebook} alt="" />
        <img className={styles.icon} src={google} alt="" />
        <img className={styles.icon} src={twitter} alt="" />
        </div>
        <Link to={"/cliente/registroinfo"}>
        <button onClick={onClickContinuar}>Continuar</button>
        </Link>
    </div>
  )
}

export default Registro