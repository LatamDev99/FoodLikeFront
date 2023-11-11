import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editarPlatillo } from '../../../../actions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const DataPlatillos = ({ data }) => {

    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleSubmit = (platillo) => {        
            dispatch(editarPlatillo(platillo))
            history.push(`/restaurante/editarplatillo`) 
    }


  return (
    
    <div>
      {data.map((categoria, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>{categoria[0].CategoriaPlatillo.nombre}</h2>
          <table border="2">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Foto</th>
                <th>Promo</th>
                <th>Stock</th>
                <th>Activo</th>
                <th>Configuración</th>
              </tr>
            </thead>
            <tbody>
              {categoria.map((platillo, platilloIndex) => (
                <tr key={platilloIndex}>
                  <td>{platillo.nombre}</td>
                  <td>{platillo.descripcion}</td>
                  <td>{platillo.precio}</td>
                  <td>{platillo.foto}</td>
                  <td>{platillo.promo}</td>
                  <td>{platillo.stock}</td>
                  <td>{platillo.activo ? 'Activo' : 'Inactivo'}</td>
                  <button onClick={()=>handleSubmit(platillo)}>Editar</button>
                </tr>
                               
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default DataPlatillos;

