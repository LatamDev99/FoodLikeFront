import React from 'react'
import styles from "./branch.module.css"
import logo from "../../img/logoFoodLike.png"
import reload from "../../img/Reload.gif"

const Branch = () => {
  return (
    <div className={styles.conteiner}>
        <img src={logo} alt="" className={styles.logo}/>
        <img src={reload} alt="" className={styles.reload}/>
    </div>
  )
}

export default Branch