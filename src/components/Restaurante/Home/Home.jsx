import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import Loading from '../Loading/Loading';
import styles from './Home.module.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Select from 'react-select'

const Home = () => {
    const restaurante = useSelector(state => state.restaurante)
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    const actualizarDatos = () =>{{
      history.push(`/restaurante/configuracion`)
    }}

    const agregarPlatillos = () =>{{
      history.push(`/restaurante/agregarplatillos`)
    }}
    

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    })

  return (
    loading ? <Loading /> :
    <div className={styles.container}>
      <h1>Bienvenido</h1>
      <label>Nombre: {restaurante.nombre}</label>
      <label>Representante: {restaurante.representante}</label>
      <label>Correo: {restaurante.correo}</label>
      <label>Telefono: {restaurante.telefono}</label>
      <label>Dirección: {restaurante.direccion}</label>
      <label>Categorias:</label> 
      <Select isMulti value={restaurante.CategoriaRestaurantes} isDisabled
      />

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
              <label>{restaurante.logo}</label>
            )}
          </label>
      <label>Fachada:</label>
            <label>
            {restaurante.fachada === null || restaurante.fachada === "" ? (
              <label style={{ color: "red" }}>Necesitas agregar la foto de tu fachada</label>
            ) : (
              <label>{restaurante.fachada}</label>
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

          <button onClick={actualizarDatos}>Configurar tus datos</button>

          <button onClick={agregarPlatillos}>Agregar Platillos</button>
      

    </div>
  )
}

export default Home