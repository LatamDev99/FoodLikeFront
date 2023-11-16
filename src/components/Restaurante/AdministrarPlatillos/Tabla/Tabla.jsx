import React from 'react';
import { useDispatch } from 'react-redux';
import { editarPlatillo } from '../../../../actions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';



const DataPlatillos = ({ data }) => {
  console.log(data)

    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleSubmit = (platillo) => {        
            dispatch(editarPlatillo(platillo))
            history.push(`/restaurante/editarplatillo`) 
    }

    const handleElim = async (platillo) => {
      try {

        const response = await axios.delete(
          `http://localhost:3001/platillo/eliminar/${platillo.id}`
        );
        console.log(response.data);
      } catch (error) {
        console.error('Error al eliminar el platillo:', error);
      }
    };


  return (
    
    <div>
    {data.map((categoria, index) => (
      <div key={index} style={{ marginBottom: '20px' }}>
        <h2>{categoria[0]?.nombre}</h2>
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
                    <button onClick={() => handleElim(platillo)}>Eliminar</button>
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

