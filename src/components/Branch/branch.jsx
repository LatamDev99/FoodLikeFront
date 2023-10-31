import React from 'react'
import styles from "./branch.module.css"
import logo from "../../img/logoFoodLike.png"
import {onClickCliente, onClickRestaurante} from "./functions"

const Branch = () => {
  return (
    <div className={styles.conteiner}>
        <img src={logo} alt="" className={styles.logo}/>
        <button onClick={onClickCliente}>Cliente</button>
        <button onClick={onClickRestaurante}>Restaurante</button>
    </div>
  )
}

export default Branch