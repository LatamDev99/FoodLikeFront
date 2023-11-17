import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import styles from './NavBar.module.css';

const ToggleNavbar = ({isOpen, toggleNavbar}) => {
  const history = useHistory();
  const onClickPerfil = () => {
    history.push(`/cliente/perfil`)
    toggleNavbar()
  }

  return (
    <div className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
         <button className={styles.toggleButton} onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={styles.navList}>
        <li><a onClick={onClickPerfil}>Mi Perfil</a></li>
        <li><a href="#promos" onClick={toggleNavbar}>Mis Descuentos</a></li>
        <li><a href="#favoritos" onClick={toggleNavbar}>Favoritos</a></li>
        <li><a href="#configuracion" onClick={toggleNavbar}>Configuracion</a></li>
        <li><a href="https://foodlike.canny.io/" onClick={toggleNavbar}>Comentarios</a></li>
        <li><a href="#ayuda" onClick={toggleNavbar}>Ayuda</a></li>
      </ul>
    </div>
  );
};

export default ToggleNavbar;
