import { useEffect, useState } from 'react'
import styles from "./Sesion.module.css"
import logo from "../../../img/logoFoodLike.png"
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import Loading from '../Loading/Loading'
import facebook from "../../../img/facebook-1-svgrepo-com.svg"
import google from "../../../img/google-color-svgrepo-com.svg"
import twitter from "../../../img/twitter-svgrepo-com.svg"

import { useDispatch } from "react-redux";
import { guardarRestaurante, guardarPlatillos } from '../../../actions'



const Sesion = () => {
  const [loading, setLoading] = useState(true)
  const [restaurante, setRestaurante] = useState({})
  
  const dispatch = useDispatch();
  const history = useHistory();  

  const handleSubmit = async () => {

        let json = await axios.post(`http://localhost:3001/restaurante/sesion`,restaurante)

        dispatch(guardarRestaurante(json.data[1]))

        if(json.data[0]===true){
          setLoading(true)
          setTimeout(() => {
            history.push("/restaurante/")
          }, 500);
      }      
  } 

  const handleChange = (e) => {
    setRestaurante({
      ...restaurante,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  })

  return (
    loading ? <Loading /> :
      <div className={styles.conteiner}>
        <img src={logo} alt="" />
        <h3>Iniciar Sesion</h3>
        <div>          
          <label>Correo: </label>
          <input 
            type="text" 
            name="correo" 
            onChange={handleChange} />
        </div>
        <div>
        <span>Contraseña: </span>
          <input 
            type="password"
            name="contrasena" 
            onChange={handleChange} />
        </div>
        <div>
        <Link to={"/restaurante/recuperar"}>Olvido la Contraseña?</Link>
        <Link to={"/restaurante/registro"}>Registrarse</Link>
        </div>
        <div className={styles.icons}>
          <img className={styles.icon} src={facebook} alt="" />
          <img className={styles.icon} src={google} alt="" />
          <img className={styles.icon} src={twitter} alt="" />
        </div>
        <button onClick={handleSubmit} className={styles.btn}>Iniciar Sesion</button>

      </div>
  )
}

export default Sesion