import React, { useState, useEffect } from "react";
import Select from 'react-select'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import styles from "./Registro.module.css"
import {  traerCategorias } from "../../../actions";
import Loading from "../Loading/Loading";

export const Registro = () => {

  const dispatch = useDispatch()
  const categoria = useSelector((state) => state.categoria);
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  const [restaurante, setRestaurante] = useState({
    correo: "",
    contrasena: "",
    nombre: "",
    representante: "",
    telefono: "",
    direccion: "",
    categorias:[]
  });

  const handleSubmit = async() => {

    let json = await axios.post(
      `http://localhost:3001/restaurante/registro`,
      restaurante
    )


      if(json.data===true)
      {
      setLoading(true)
      setTimeout(() => {
        history.push("/restaurante/registroinfo")
    }, 1500);
  }
  }

  const handleChange = (e) => {
    setRestaurante({
      ...restaurante,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    dispatch(traerCategorias());   
    setTimeout(() => {
      setLoading(false)
  }, 1000);
  }, [dispatch]);

return (
  loading ? <Loading/>:
    <div className={styles.container}>  
              <div>
                <label>Correoooooooo: </label>
                <input
                  type="text"
                  name="correo"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Contraseña:</label>
                <input
                  type="password"
                  name="contrasena"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Representante: </label>
                <input
                  type="text"
                  name="representante"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Teléfono: </label>
                <input
                  type="text"
                  name="telefono"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Dirección: </label>
                <input
                  type="text"
                  name="direccion"
                  onChange={handleChange}
                />
              </div>
            <label>Categorías: </label>
            <Select isMulti  options={categoria}
        onChange={(item)=> setRestaurante({
          ...restaurante,
            categorias: item.map(cat => cat.id)
          }) } />
              <div>
                <button onClick={handleSubmit}>Crear Restaurante</button>
              </div>         
     </div>
)
}

