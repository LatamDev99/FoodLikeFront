import { useEffect, useState } from 'react'
import styles from "./Contraseña.module.css"
import Loading from '../Loading/Loading'
import logo from "../../../img/logoFoodLike.png"

const Recuperar = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    })
    const onClickEnviar = () => {
        window.location.href = "/cliente/actualizar";
      }
  return (
    loading ? <Loading/> :
    <div className={styles.conteiner}>
        <img src={logo} alt="" />
       <h3>Recuperar Contraseña</h3>
       <span>Correo</span>
       <input type="text" />
       <button>Obtener Codigo</button>
       <span>Codigo</span>
      <div className={styles.codigo}>
      <input className={styles.code} type="number" />
      <input className={styles.code} type="number" />
      <input className={styles.code} type="number" />
      <input className={styles.code} type="number" />
      </div>
      <button onClick={onClickEnviar}>Enviar</button>
    </div>
  )
}

export default Recuperar