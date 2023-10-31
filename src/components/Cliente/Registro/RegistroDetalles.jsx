import React from 'react'
import Loading from '../Loading/Loading'
import styles from "./Registro.module.css"
import logo from "../../../img/logoFoodLike.png"

const RegistroDetalles = () => {
    const onClickContinuar = () => {
        window.location.href = "/cliente/preferencias";
      }
  return (
    <div className={styles.conteiner}>
        <img src={logo} alt="" />
        <span>Nombre</span>
        <input type="text" />
        <span>Apellido</span>
        <input type="text" />
        <span>Lada</span>
        <input type="number" />
        <span>Telefono</span>
        <input type="number" />
        <button>Obtener Codigo</button>
        <div className={styles.codigo}>
      <input className={styles.code} type="number" />
      <input className={styles.code} type="number" />
      <input className={styles.code} type="number" />
      <input className={styles.code} type="number" />
      </div>
      <button onClick={onClickContinuar}>Continuar</button>
    </div>
  )
}

export default RegistroDetalles