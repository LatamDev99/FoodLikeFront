import React from 'react';
import styles from './Footer.module.css';
import {  useHistory } from 'react-router-dom'
import home from "../../../assets/home-svgrepo-com.svg"
import settings from "../../../assets/settings-svgrepo-com.svg"
import administrar from "../../../assets/add-category-svgrepo-com.svg"
import agregar from "../../../assets/add-plus-circle-svgrepo-com.svg"

import { useSelector } from 'react-redux';

const Footer = () => {
   
  const restaurante = useSelector(state => state.restaurante)
  const history = useHistory();

  const onClickHome = () => {
    history.push(`/restaurante`)
  }

  const onClickConfiguracion = () => {
    history.push(`/restaurante/configuracion`)
  }

  const onClickAdministrar = () => {
    if (restauranteCompleto()) {
      history.push(`/restaurante/administrarplatillos`);
    }
  };

  const agregarPlatillos = () => {
    if (restauranteCompleto()) {
      history.push(`/restaurante/categoriaplatillo`);
    }
  };


  const restauranteCompleto = () => {
    return (
      restaurante.nombre &&
      restaurante.representante &&
      restaurante.correo &&
      restaurante.telefono &&
      restaurante.direccion &&
      restaurante.CategoriaRestaurantes.length>0 &&
      restaurante.horario &&
      restaurante.logo &&
      restaurante.fachada &&
      restaurante.cuentaBancaria &&
      restaurante.alcance
    );
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.btns}>
       <div className={styles.btn} onClick={onClickHome}>
        <img className={styles.icon} src={home} alt="" />
        <span className={styles.nombreBtn}>Inicio</span>
       </div>
       <div className={styles.btn} onClick={onClickConfiguracion}>
        <img className={styles.icon} src={settings} alt="" />
        <span className={styles.nombreBtn}>Configurar</span>
       </div>

       <div className={`${styles.btn} ${!restauranteCompleto() ? styles.opaco : ''}`} onClick={onClickAdministrar}>
          <img className={styles.icon} src={administrar} alt="" />
          <span className={styles.nombreBtn}>Administrar</span>
        </div>

        <div className={`${styles.btn} ${!restauranteCompleto() ? styles.opaco : ''}`} onClick={agregarPlatillos}>
          <img className={styles.icon} src={agregar} alt="" />
          <span className={styles.nombreBtn}>Platillos +</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
