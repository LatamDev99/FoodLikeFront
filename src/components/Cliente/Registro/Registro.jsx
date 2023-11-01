import { useEffect, useState } from 'react'
import styles from "./Registro.module.css"
import Loading from '../Loading/Loading'
import { Link, useHistory } from 'react-router-dom'
import logo from "../../../img/logoFoodLike.png"
import facebook from "../../../img/facebook-1-svgrepo-com.svg"
import google from "../../../img/google-color-svgrepo-com.svg"
import twitter from "../../../img/twitter-svgrepo-com.svg"
import { useDispatch } from 'react-redux'
import { guardarNuevoUsuario } from '../../../actions'
import { validarCorreo, validarContrasena, compararContraseña } from './functions'

const Registro = () => {
    const [loading, setLoading] = useState(true)
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [repetirContraseña, setRepetirContrasena] = useState("")
    const [errors, setErrors] = useState({ correo: "", contraseña: "" })
    const [hasErrors, setHasErrors] = useState(false);

    const history = useHistory();

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
        history.push("/cliente/registroinfo")
      }
    const onChangeCorreo = (e) => {
        setCorreo(e.target.value)
        const correoError = validarCorreo(e.target.value) ? "" : "El Correo no es Valido";
        setErrors({ ...errors, correo: correoError });
        setHasErrors(Object.values({ ...errors, correo: correoError }).some((error) => error !== ""));
    }
    const onChangeContrasena = (e) => {
        setContrasena(e.target.value)
        const contrasenaError = validarContrasena(e.target.value) ? "" : "La contrseña debe contener 8 caracteres, Mayuscula, Minuscula y Numero";
        setErrors({ ...errors, contrasena: contrasenaError });
        setHasErrors(Object.values({ ...errors, contrasena: contrasenaError }).some((error) => error !== ""));
    }
    const onChangeRepetirContrasena = (e) => {
        setRepetirContrasena(e.target.value)
        const repetirContrasenaError = compararContraseña(e.target.value, contrasena) ? "" : "La contrseña no coincide";
        setErrors({ ...errors, repetirContraseña: repetirContrasenaError });
        setHasErrors(Object.values({ ...errors, repetirContraseña: repetirContrasenaError }).some((error) => error !== ""));
    }
  return (
    loading ? <Loading/> :
    <div className={styles.conteiner}>
        <img src={logo} alt="" />
        <h3>Registrarse</h3>
        <span>Correo</span>
        <input type="text" value={correo} onChange={onChangeCorreo}/>
        <span className={styles.error}>{errors.correo}</span>
        <span>Contraseña</span>
        <input type="password" value={contrasena} onChange={onChangeContrasena}/>
        <span className={styles.error}>{errors.contrasena}</span>
        <span>Repetir Contraseña</span>
        <input type="password" value={repetirContraseña} onChange={onChangeRepetirContrasena}/>
        <span className={styles.error}>{errors.repetirContraseña}</span>
        <Link to={"/cliente/sesion"}>Iniciar Sesion</Link>
        <div className={styles.icons}>
        <img className={styles.icon} src={facebook} alt="" />
        <img className={styles.icon} src={google} alt="" />
        <img className={styles.icon} src={twitter} alt="" />
        </div>
         <button onClick={onClickContinuar} disabled={hasErrors}>Continuar</button>
    </div>
  )
}

export default Registro