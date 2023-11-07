import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

import Loading from '../Loading/Loading';
import styles from './Actualizar.module.css'

import { guardarRestaurante, traerCategorias } from '../../../actions';
import Select from 'react-select'

const Actualizar = () => {
    const restaurante = useSelector(state => state.restaurante)
    const categoria = useSelector(state => state.categoria)
    const [actualizar, setActualizar] = useState(restaurante)
    const [loading, setLoading] = useState(true)
 
    const history = useHistory()
    const dispatch = useDispatch()

    const actualizarDatos = async () =>{      
      let json = await axios.patch(
        `http://localhost:3001/restaurante/actualizar`,
        actualizar
      )

      if(json.data[0]===true){
        dispatch(guardarRestaurante(actualizar))
        history.push(`http://localhost:3000/restaurante/sesion`)
      }
    }

    const handleChange = (e) => {
      setActualizar({
        ...actualizar,
        [e.target.name]: e.target.value,
      });
    }

    const HomeSesion = () =>{
      history.push("/restaurante/")
    }

    useEffect(() => {
      dispatch(traerCategorias());         
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    },[dispatch])

  return (
    loading ? <Loading /> :
    <div className={styles.container}>
        <h1>Bienvenido</h1>
        <label>Nombre: {restaurante.nombre}</label>
        <label>Representante: {restaurante.representante}</label>
        <label>Correo: {restaurante.correo}</label>
        <label>Telefono: {restaurante.telefono}</label>
        <label>Dirección: {restaurante.direccion}</label>
        <Select isMulti  options={categoria} value={actualizar.CategoriaRestaurantes} 
          onChange={(item)=> setActualizar({
          ...actualizar,
          CategoriaRestaurantes: item
          })}
          />
        <label>Horario:</label>
          <input 
            type="text"
            name="horario"
            value={actualizar.horario}
            onChange={handleChange}
            />
        <label>Logo:</label>
          <input
            type="text"
            name="logo"
            value={actualizar.logo}
            onChange={handleChange}     
            />
        <label>Fachada:</label>
            <input
            type="text"
            name="fachada"
            value={actualizar.fachada}
            onChange={handleChange}
            />
        <label>Cuenta Bancaria:</label>
            <input
            type="text"
            name="cuentaBancaria"
            value={actualizar.cuentaBancaria}
            onChange={handleChange}
            />
        <label>Alcance:</label>
            <input
            type="text"
            name="alcance"
            value={actualizar.alcance}
            onChange={handleChange}
            />
        <button onClick={actualizarDatos}>Actualizar</button>
        <button onClick={HomeSesion}>Atrás</button>      
      </div>
  )
}

export default Actualizar