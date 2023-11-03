import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Loading from '../Loading/Loading';
import styles from './Actualizar.module.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

import { guardarRestaurante } from '../../../actions';



const Actualizar = () => {
    const restaurante = useSelector(state => state.restaurante)
    const [loading, setLoading] = useState(true)
    const [actualizar, setActualizar] = useState(restaurante)
    const history = useHistory()
    const dispatch = useDispatch()

    const categorias = restaurante.CategoriaRestaurantes?.map(categoriaRestaurante => categoriaRestaurante.label);

    const actualizarDatos = async () =>{
      
      let json = await axios.patch(
        `http://localhost:3001/restaurante/actualizar`,
        actualizar
      )

      if(json.data[0]===true){
        dispatch(guardarRestaurante(json.data[1]))
        history.push(`http://localhost:3000/restaurante/sesion`)
      }
    }

    const handleChange = (e) => {
      setActualizar({
        ...actualizar,
        [e.target.name]: e.target.value,
      });
    }


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
      <label>Categorias: {`${categorias}   `}  </label>
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
      </div>
  )
}

export default Actualizar