import React, { useState, useEffect } from "react";
import Select from 'react-select'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { guardarCategoria, traerCategorias } from "../../../../actions";
import { onClickCaTegoria } from "../functions";



export const FormularioRestaurante = () => {

  const dispatch = useDispatch()
  const categoria = useSelector((state) => state.categoria);
  const [categoriaSeleccionada , setCategoriaSeleccionada] = useState([])
  const idsObjeto = []

  const [input, setInput] = useState({
    correo: "",
    contrasena: "",
    nombre: "",
    representante: "",
    telefono: "",
    direccion: "",
    horario: "",
    logo:"",
    fachada:"",
    cuentaBancaria:"",
    alcance:""
  });

  const [input2, setInput2] = useState({
      correo: "",
      contrasena: "",
      nombre: "",
      representante: "",
      telefono: "",
      direccion: "",
      horario:"",
      logo:"",
      fachada:"",
      cuentaBancaria:"",
      alcance:"",
      categorias: [],
  });

  const handleSubmit = () => {

    for (let i = 0; i < categoriaSeleccionada.length; i++) {
      const id = categoriaSeleccionada[i].id;
      idsObjeto.push(id)
  }

    setInput2({
      correo: input.correo,
      contrasena: input.contrasena,
      nombre: input.nombre,
      representante: input.representante,
      telefono: input.telefono,
      direccion: input.direccion,
      horario: input.horario,
      logo: input.logo,
      fachada: input.fachada,
      cuentaBancaria: input.cuentaBancaria,
      alcance: input.alcance,
      categorias: idsObjeto
    })

    let json =  axios.post(
      `http://localhost:3001/restaurante/registro`,
      input2
    )
    console.log(json)
  }


  const handleChange = (e) => {
    setInput({
      ...input,
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
              <div>
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
            </div>
            <Select isMulti  options={categoria}
        onChange={(item)=> setCategoriaSeleccionada(item)} />
              <div>
                <button onClick={handleSubmit}>Crear Restaurante</button>
              </div>         
     </div>
)
}

