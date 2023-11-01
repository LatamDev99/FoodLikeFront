import { useEffect, useState } from 'react'
import styles from "./Sesion.module.css"
import logo from "../../../img/logoFoodLike.png"
import { Link, useHistory } from 'react-router-dom'
import Loading from '../Loading/Loading'
import facebook from "../../../img/facebook-1-svgrepo-com.svg"
import google from "../../../img/google-color-svgrepo-com.svg"
import twitter from "../../../img/twitter-svgrepo-com.svg"
import { useDispatch } from "react-redux";
import { datosUsuario } from '../../../actions'
import axios from 'axios'
import { validarCorreo } from './functions'


const Sesion = () => {
  const [loading, setLoading] = useState(true)
  const [correo, setCorreo] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [errors, setErrors] = useState({ correo: "", contraseña: "" })
  const [hasErrors, setHasErrors] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  })
  const onClickContinuar = async () => {
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      alert("Lo sentimos, aún hay errores. Por favor, revisa los datos e inténtalo nuevamente.");
      return;
    } else {
      let credenciales = {
        correo: correo,
        contrasena: contrasena
      }
      try {
        let response = await axios.post("http://localhost:3001/cliente/sesion", credenciales)
        if (response.data.nombre && response.data.nombre.length > 0) {
          dispatch(datosUsuario(response.data))
          history.push("/cliente")
          alert(`¡Hola, ${response.data.nombre}! Has iniciado sesión.`);
        }
        else {
          alert(`Ups ${response.data}`)
        }
      } catch (error) {
        alert("Ha ocurrido un error al iniciar sesión. Por favor, verifica tus credenciales.");
        console.error(error);
      }
    }
  }

  const onChangeCorreo = (e) => {
    setCorreo(e.target.value);
    const correoError = validarCorreo(e.target.value) ? "" : "El Correo no es Valido";
    setErrors({ ...errors, correo: correoError });
    setHasErrors(Object.values({ ...errors, correo: correoError }).some((error) => error !== ""));
  };

  const onChangeContrasena = (e) => {
    setContrasena(e.target.value)
  }
  return (
    loading ? <Loading /> :
      <div className={styles.conteiner}>
        <img src={logo} alt="" />
        <h3>Iniciar Sesion</h3>
        <span>Correo</span>
        <input type="text" value={correo} onChange={onChangeCorreo} />
        <span className={styles.error}>{errors.correo}</span>
        <span>Contraseña</span>
        <input type="password" value={contrasena} onChange={onChangeContrasena} />
        <Link to={"/cliente/recuperar"}>Olvido la Contraseña?</Link>
        <Link to={"/cliente/registro"}>Registrarse</Link>
        <div className={styles.icons}>
          <img className={styles.icon} src={facebook} alt="" />
          <img className={styles.icon} src={google} alt="" />
          <img className={styles.icon} src={twitter} alt="" />
        </div>
        <button onClick={onClickContinuar} disabled={hasErrors} className={styles.btn}>Iniciar Sesion</button>
      </div>
  )
}

export default Sesion