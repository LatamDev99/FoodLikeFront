import React, { useState } from 'react';
import styles from './NavBar.module.css';
import gift from "../assets/gift.svg"

const NavBar = ({toggleNavbar, direccion}) => {

  return (
    <nav className={styles.navBar}>
      <button className={styles.toggleButton} onClick={toggleNavbar}>
        ☰
      </button>
      <span className={styles.direccion}>{direccion && direccion}</span>
      <img className={styles.gift} src={gift} alt="" />
      <div className={styles.menu}>
      <ul className={styles.options}>
        <li className={styles.option}><a href="#inicio">Mi Perfil</a></li>
        <li className={styles.option}><a href="#proyectos">Mis Descuentos</a></li>
        <li className={styles.option}><a href="#saber-mas">Favoritos</a></li>
        <li className={styles.option}><a href="#contacto">Configuracion</a></li>
        <li className={styles.option}><a href="https://foodlike.canny.io/">Comentarios</a></li>
        <li className={styles.option}><a href="#contacto">Ayuda</a></li>
      </ul>
      </div>
    </nav>
  );
};

export default NavBar;
