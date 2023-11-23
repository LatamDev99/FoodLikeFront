import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import Loading from '../Loading/Loading';
import styles from './Home.module.css'
import Select from 'react-select'

const Home = () => {
    const restaurante = useSelector(state => state.restaurante)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    })
    
  return (
    loading ? <Loading /> :
    <div className={styles.container}>
      <h1 className={styles.h1}>Bienvenido</h1>
      <label className={styles.nombre}>{restaurante.nombre}</label>
      <label>Representante: {restaurante.representante}</label>
      <label>Correo: {restaurante.correo}</label>
      <label>Telefono: {restaurante.telefono}</label>
      <label>Dirección: {restaurante.direccion}</label>
      <label>Categorias:</label> 
      <Select isMulti value={restaurante.CategoriaRestaurantes} isDisabled
      />
      {restaurante.CategoriaRestaurantes?.length === 0 && (
        <label style={{ color: "red" }}>Necesitas agregar categorías</label>
      )}
      <label>Horario:</label>
            <label>
            {restaurante.horario === null || restaurante.horario === "" ? (
              <label style={{ color: "red" }}>Necesitas rellenar tu horario</label>
            ) : (
              <label>{restaurante.horario}</label>
            )}
          </label>
      <label>Logo:</label>
            <label>
            {restaurante.logo === null || restaurante.logo === "" ? (
              <label style={{ color: "red" }}>Necesitas agregar tu logo</label>
            ) : (
              <img src={restaurante.logo} alt=""></img>
            )}
          </label>
      <label>Fachada:</label>
            <label>
            {restaurante.fachada === null || restaurante.fachada === "" ? (
              <label style={{ color: "red" }}>Necesitas agregar la foto de tu fachada</label>
            ) : (
              <img src={restaurante.fachada} alt=""></img>
            )}
          </label>
      <label>Cuenta Bancaria:</label>
            <label>
            {restaurante.cuentaBancaria === null || restaurante.cuentaBancaria === "" ? (
              <label style={{ color: "red" }}>Necesitas agregar una cuenta bancaria</label>
            ) : (
              <label>{restaurante.cuentaBancaria}</label>
            )}
          </label>
      <label>Alcance:</label>
          <label>
            {restaurante.alcance === null || restaurante.alcance === "" ? (
              <label style={{ color: "red" }}>Necesitas agregar el alcance de tus servicios</label>
            ) : (
              <label>{restaurante.alcance}</label>
            )}
          </label>     

    </div>
    
    
  )
}

export default Home