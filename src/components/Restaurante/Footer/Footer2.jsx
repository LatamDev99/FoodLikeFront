import React from 'react';
import styles from './Footer.module.css';
import { useHistory } from 'react-router-dom';
import home from "../../../assets/home-svgrepo-com.svg";
import settings from "../../../assets/settings-svgrepo-com.svg";
import administrar from "../../../assets/add-category-svgrepo-com.svg";
import agregar from "../../../assets/add-plus-circle-svgrepo-com.svg";
import { useSelector } from 'react-redux';

class Footer extends React.Component {
  onClickHome = () => {
    this.props.history.push(`/restaurante`);
  };

  onClickConfiguracion = () => {
    this.props.history.push(`/restaurante/configuracion`);
  };

  onClickAdministrar = () => {
    if (this.restauranteCompleto()) {
      this.props.history.push(`/restaurante/administrarplatillos`);
    }
  };

  agregarPlatillos = () => {
    if (this.restauranteCompleto()) {
      this.props.history.push(`/restaurante/categoriaplatillo`);
    }
  };

  restauranteCompleto = () => {
    const restaurante = this.props.restaurante;
    return (
      restaurante.nombre &&
      restaurante.representante &&
      restaurante.correo &&
      restaurante.telefono &&
      restaurante.direccion &&
      restaurante.CategoriaRestaurantes.length > 0 &&
      restaurante.horario &&
      restaurante.logo &&
      restaurante.fachada &&
      restaurante.cuentaBancaria &&
      restaurante.alcance
    );
  };

  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.btns}>
          <div className={styles.btn} onClick={this.onClickHome}>
            <img className={styles.icon} src={home} alt="" />
            <span className={styles.nombreBtn}>Inicio</span>
          </div>
          <div className={styles.btn} onClick={this.onClickConfiguracion}>
            <img className={styles.icon} src={settings} alt="" />
            <span className={styles.nombreBtn}>Configurar</span>
          </div>

          <div
            className={`${styles.btn} ${!this.restauranteCompleto() ? styles.opaco : ''}`}
            onClick={this.onClickAdministrar}
          >
            <img className={styles.icon} src={administrar} alt="" />
            <span className={styles.nombreBtn}>Administrar</span>
          </div>

          <div
            className={`${styles.btn} ${!this.restauranteCompleto() ? styles.opaco : ''}`}
            onClick={this.agregarPlatillos}
          >
            <img className={styles.icon} src={agregar} alt="" />
            <span className={styles.nombreBtn}>Platillos +</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
