import React, { useState, useEffect } from "react";
import Select from 'react-select'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {  traerCategorias } from "../../../../actions";



export const FormularioRestaurante = () => {

  const dispatch = useDispatch()
  const categoria = useSelector((state) => state.categoria);
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
    
  }


  const handleChange = (e) => {
    setRestaurante({
      ...restaurante,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    dispatch(traerCategorias());   

  }, [dispatch]);

return (
    <div>
  
              <div>
                <label>Correo: </label>
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
              {/* <div>
                <label>Horario: </label>
                <input
                  type="text"
                  name="horario"
                  onChange={handleChange}
                />
              </div>
              <div>
              <label>Logo: </label>
              <input
                  type="text"
                  name="logo"
                  onChange={handleChange}
                />
            </div>
            <div>
            <label>Fachada: </label>
              <input
                  type="text"
                  name="fachada"
                  onChange={handleChange}
                />
            </div>
            <div>
            <label>Cuenta Bancaria: </label>
              <input
                  type="text"
                  name="cuentaBancaria"
                  onChange={handleChange}
                />
            </div>
            <div>
            <label>Alcance: </label>
              <input
                  type="number"
                  name="alcance"
                  onChange={handleChange}
                />
            </div> */}
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

