import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarPlatillo, eliminarPlatillo, guardarPlatillos  } from '../../../../actions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useState } from 'react';


const DataPlatillos = ({ data  }) => {

  const [dataPlatillos, setDataPlatillos] = useState(data)



    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleSubmit = (platillo) => {        
            dispatch(editarPlatillo(platillo))
            history.push(`/restaurante/editarplatillo`) 
    }

    const handleEliminarPlatillo = async (platillo) => {
      try {        
        const response = await axios.delete(`http://localhost:3001/platillo/eliminar/${platillo.id}`);

        if (response.status === 200) {
          const idPlatilloAEliminar = platillo.id.toString();
        
          setDataPlatillos((prevData) =>
            prevData.map((subArray) =>
              subArray.map((item) => {
                if (item.Platillos) {
                  return {
                    ...item,
                    Platillos: item.Platillos.filter(
                      (platillo) => platillo.id !== idPlatilloAEliminar
                    ),
                  };
                }
                return item;
              })
            )
          );
        } else {
          console.error('Error al eliminar el platillo. Estado del servidor:', response.status);
        }
      } catch (error) {
        console.error('Error al eliminar el platillo:', error);
      }
    };

    const eliminarCategoria = async (id) => {
      console.log(id)
    }

  return (
    
    <div>
    {dataPlatillos.map((categoria, index) => (
      <div key={index} style={{ marginBottom: '20px' }}>
        <h2>{categoria[0]?.nombre} <button onClick={()=> eliminarCategoria(categoria[0]?.id)}>Eliminar</button></h2>       
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
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {/* Verifica si existen platillos antes de mapear */}
            {categoria[0].Platillos && categoria[0].Platillos.length > 0 ? (
              categoria[0].Platillos?.map((platillo, platilloIndex) => (
                <tr key={platilloIndex}>
                  <td>{platillo.nombre}</td>
                  <td>{platillo.descripcion}</td>
                  <td>{platillo.precio}</td>
                  <td>{platillo.foto}</td>
                  <td>{platillo.promo}</td>
                  <td>{platillo.stock}</td>
                  <td>{platillo.activo ? 'Activo' : 'Inactivo'}</td>
                  <td>
                    <button onClick={() => handleSubmit(platillo)}>Editar</button>
                  </td>
                  <td>
                    <button onClick={() => handleEliminarPlatillo(platillo)}>Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No hay platillos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    ))}
  </div>
  );
};

export default DataPlatillos;

