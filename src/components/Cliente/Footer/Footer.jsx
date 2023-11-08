import React from 'react';
import styles from './Footer.module.css';
import { Link, useHistory } from 'react-router-dom'
import home from "../assets/home-svgrepo-com.svg"
import posicion from "../assets/location-pin-lock-svgrepo-com.svg"
import likes from "../assets/like-svgrepo-com.svg"
import list from "../assets/list.svg"

const Footer = () => {
  
  const history = useHistory();

  const onClickHome = () => {
    history.push(`/cliente`)
  }

  const onClickSerca = () => {
    history.push(`/cliente/serca`)
  }

  const onClickLoMas = () => {
    history.push(`/cliente/lomas`)
  }

  const onClickPedidos = () => {
    history.push(`/cliente/pedidos`)
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.btns}>
       <div className={styles.btn} onClick={onClickHome}>
        <img className={styles.icon} src={home} alt="" />
        <span className={styles.nombreBtn}>Inicio</span>
       </div>
       <div className={styles.btn} onClick={onClickSerca}>
        <img className={styles.icon} src={posicion} alt="" />
        <span className={styles.nombreBtn}>Serca</span>
       </div>
       <div className={styles.btn} onClick={onClickLoMas}>
        <img className={styles.icon} src={likes} alt="" />
        <span className={styles.nombreBtn}>Lo Más</span>
       </div>
       <div className={styles.btn} onClick={onClickPedidos}>
        <img className={styles.icon} src={list} alt="" />
        <span className={styles.nombreBtn}>Pedidos</span>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
