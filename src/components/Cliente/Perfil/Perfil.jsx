import React from 'react'
import styles from "./Perfil.module.css"
import perfil from "../../../img/profile-circle-svgrepo-com.svg"

const Perfil = () => {
    const correo = "e***@gmail.com"
    const telefono = "152 ******05"
    return (
        <div className={styles.conteiner}>
            <h2 className={styles.perfil}>Mi Perfil</h2>
            <div className={styles.image}>
                <img className={styles.icon} src={perfil} alt="" />
                <span className={styles.textBtn}>Cambiar foto de perfil {">"}</span>
            </div>
            <div className={styles.name}>
                <p className={styles.titleName}>Nombre:</p>
                <input className={styles.inp} type="text" value="nombre" />
                <br className={styles.separador}/>
                <p className={styles.titleName}>Apellido:</p>
                <input className={styles.inp} type="text" value="apellido" />
                <br className={styles.separador}/>
                <p className={styles.titleName}>Fecha de nacimiento</p>
                <input className={styles.inp} type="date" name="fechaDeNacimiento" id="fechaDeNacimiento" />
            </div>
            <div className={styles.datos}>
                <div className={styles.cont}>
                <p className={styles.titleopt}>Correo electronico:</p>
                <span className={styles.textBtn}>{correo} {">"}</span>
                </div>
                <div className={styles.cont}>
                    <p className={styles.titleopt}>Contraseña:</p>
                    <span className={styles.textBtn}> ******** {">"}</span>
                </div>
                <div className={styles.cont}>
                    <p className={styles.titleopt}>Telefono:</p>
                    <span className={styles.textBtn}> {telefono} {">"}</span>
                </div>
                <div className={styles.cont}>
                    <p className={styles.titleopt}>Redes sociales:</p>
                    <span className={styles.textBtn}>Conectar {" >"}</span>
                </div>
                <div className={styles.cont}>
                <p className={styles.titleopt}>Eliminar cuenta</p>
                    <span className={styles.textBtn}>{">"}</span>
                </div>
            </div>
        </div>
    )
}

export default Perfil