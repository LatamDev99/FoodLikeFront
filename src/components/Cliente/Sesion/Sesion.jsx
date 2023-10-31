import { useEffect, useState } from 'react'
import styles from "./Sesion.module.css"
import logo from "../../../img/logoFoodLike.png"
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import facebook from "../../../img/facebook-1-svgrepo-com.svg"
import google from "../../../img/google-color-svgrepo-com.svg"
import twitter from "../../../img/twitter-svgrepo-com.svg"
import { useDispatch } from "react-redux";
import { datosUsuario } from '../../../actions'
import axios from 'axios'


const Sesion = () => {
    const [loading, setLoading] = useState(true)
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    })
    const onClickContinuar = async () => {
      let credenciales = {
        correo: correo,
        contrasena: contrasena
      }
      try {
        let response = await axios.post("http://localhost:3001/cliente/sesion", credenciales)
        if (response.data.nombre && response.data.nombre.length > 0) {
          dispatch(datosUsuario(response.data))
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
    
    const onChangeCorreo = (e) => {
        setCorreo(e.target.value)
    }
    const onChangeContrasena = (e) => {
        setContrasena(e.target.value)
    }
  return (
    loading ? <Loading/> :
    <div className={styles.conteiner}>
        <img src={logo} alt="" />
        <h3>Iniciar Sesion</h3>
        <span>Correo</span>
        <input type="text" value={correo} onChange={onChangeCorreo}/>
        <span>Contraseña</span>
        <input type="password" value={contrasena} onChange={onChangeContrasena}/>
        <Link to={"/cliente/recuperar"}>Olvido la Contraseña?</Link>
        <Link to={"/cliente/registro"}>Registrarse</Link>
        <div className={styles.icons}>
        <img className={styles.icon} src={facebook} alt="" />
        <img className={styles.icon} src={google} alt="" />
        <img className={styles.icon} src={twitter} alt="" />
        </div>
       <Link to={"/cliente"}>
       <button onClick={onClickContinuar}>Iniciar Sesion</button>
       </Link>
    </div>
  )
}

export default Sesion