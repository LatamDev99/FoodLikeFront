import React, { useState } from 'react';
import styles from './NavBar.module.css';

const ToggleNavbar = ({isOpen, toggleNavbar}) => {

  return (
    <div className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
         <button className={styles.toggleButton} onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={styles.navList}>
        <li><a href="#inicio" onClick={toggleNavbar}>Mi Perfil</a></li>
        <li><a href="#proyectos" onClick={toggleNavbar}>Mis Descuentos</a></li>
        <li><a href="#saber-mas" onClick={toggleNavbar}>Favoritos</a></li>
        <li><a href="#contacto" onClick={toggleNavbar}>Configuracion</a></li>
        <li><a href="https://foodlike.canny.io/" onClick={toggleNavbar}>Comentarios</a></li>
        <li><a href="#contacto" onClick={toggleNavbar}>Ayuda</a></li>
      </ul>
    </div>
  );
};

export default ToggleNavbar;
