import React, { useState, useEffect } from "react";
import Select from 'react-select'

import { useDispatch, useSelector } from "react-redux";
import { guardarCategoria, traerCategorias } from "../../../../actions";

import { onClickCaTegoria } from "../functions";


export const OpcionesCategoria = () => {

  const dispatch = useDispatch()
  const categoria = useSelector((state) => state.categoria);
  const [categoriaSeleccionada , setCategoriaSeleccionada] = useState([])

  const handleSelect = () =>{
   
    dispatch(guardarCategoria(categoriaSeleccionada))
    onClickCaTegoria()
  }

  useEffect(() => {
    dispatch(traerCategorias());    
  }, [dispatch]);

return (
    <div>

    <Select isMulti  options={categoria}
    onChange={(item)=> setCategoriaSeleccionada(item)}
    />

    <button  onClick={handleSelect}>Aceptar</button>  
    </div>
)
}

