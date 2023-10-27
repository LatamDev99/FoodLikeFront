import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { guardarCategoria, traerCategorias } from "../../../../actions";

import { onClickCaTegoria } from "../functions";


export const OpcionesCategoria = () => {

  const dispatch = useDispatch()
  const categoria = useSelector((state) => state.categoria);
  const [a , setA] = useState()

  const handleSubmit = async (event) =>{
    setA(event.target.value)
    dispatch(guardarCategoria(a))
  }

  useEffect(async () => {
    dispatch(traerCategorias());    
  }, [dispatch]);

return (
    <div>
    <select onChange={handleSubmit}>
      <option value="">Selecciona una opción</option>
      {categoria?.map((cat, index) => (
        <option key={index} value={cat.id}>
          {cat.nombre}
        </option>
      ))}
    </select> 


    <button  onClick={onClickCaTegoria}>Aceptar</button>  
    </div>
)
}

