import React from 'react'
import reload from "../../../img/Reload.gif"
import styles from "./Loading.module.css"

const Loading = () => {
  return (
    <div className={styles.container}>
        <img src={reload} alt="" />
    </div>
  )
}

export default Loading