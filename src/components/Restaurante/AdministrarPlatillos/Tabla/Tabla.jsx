import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Tabla.module.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useState } from 'react';

import { editarPlatillo } from '../../../../actions';

const Tabla = ({ data  }) => {

  const [dataPlatillos, setDataPlatillos] = useState(data)

  const cat  = dataPlatillos.flatMap((categoria) =>
  categoria.map(({ id, nombre }) => ({ id, nombre }))
  )  
  const [categoriasPlatillos, setCategoriasPlatillos] = useState(cat)

  const dispatch = useDispatch()
  const history = useHistory()
  
  const handleSubmit = (platillo) => {        
          dispatch(editarPlatillo(platillo))
          history.push(`/restaurante/editarplatillo`) 
  }

  const handleCategoria = async (e,  platilloId, categoriaSaliente ) => {

    const categoriaSeleccionadaId = categoriasPlatillos[e.target.selectedIndex]?.id;

    const a = {
      idPlatillo: platilloId, 
      idCategoriaEntrante: categoriaSeleccionadaId
    }
      const response = await axios.patch(
        `http://localhost:3001/categoriaplatillo/cambiarcategoria`,
        a
      ); 

      if(response.status===200){
        const newDataPlatillos = moverPlatilloACategoria(dataPlatillos, platilloId,categoriaSeleccionadaId);

        setDataPlatillos(newDataPlatillos);
      }
  };

  const moverPlatilloACategoria = (dataPlatillos, platilloId, categoriaSeleccionadaId) => {
    let newData = [...dataPlatillos];

    newData = newData.map((categoria) => {
      return categoria.map((cat) => {
        if (cat.Platillos) {
          const platilloIndex = cat.Platillos.findIndex((platillo) => platillo.id === platilloId);
          if (platilloIndex !== -1) {

            const movedPlatillo = cat.Platillos[platilloIndex];
            cat.Platillos.splice(platilloIndex, 1);

            const targetCategoriaIndex = newData.findIndex(
              (targetCat) => targetCat[0].id === categoriaSeleccionadaId
            );
            if (targetCategoriaIndex !== -1) {
              newData[targetCategoriaIndex][0].Platillos.push(movedPlatillo);
            }
          }
        }
        return cat;
      });
    });
    return newData;
  };

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
    
    <div className={styles.container}>
    {dataPlatillos.map((categoria, index) => (
      <div key={index} style={{ marginBottom: '20px' }}>
        <h2>{categoria[0]?.nombre} <button onClick={()=> eliminarCategoria(categoria[0]?.id)}>Eliminar</button></h2>       
        <table table className={styles.adminTabla} border="2">
        {categoria[0].Platillos && categoria[0].Platillos.length > 0 ? (
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
              <th>Cambiar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
        ):""}
          <tbody>
            {categoria[0].Platillos && categoria[0].Platillos.length > 0 ? (
              categoria[0].Platillos?.map((platillo, platilloIndex) => (
                <tr key={platilloIndex}>
                  <td>{platillo.nombre}</td>
                  <td>{platillo.descripcion}</td>
                  <td>{platillo.precio}</td>
                  <td><img src={platillo.foto} alt="" /></td>
                  <td>{platillo.promo}</td>
                  <td>{platillo.stock}</td>
                  <td>{platillo.activo ? 'Activo' : 'Inactivo'}</td>
                  <td>
                    <button onClick={() => handleSubmit(platillo)}>Editar</button>
                  </td>
                  <td>      
      
                  <select value={`${index}-${platillo.id}`} onChange={(e) => handleCategoria(e, platillo.id, categoria[0].id)}>
                  {categoriasPlatillos?.map((categoriaItem, itemIndex) => (
                      <option key={categoriaItem.id} value={`${itemIndex}-${platillo.id}`}>
                          {categoriaItem.nombre}
                      </option>
                  ))}
                </select>
                  </td>
                  <td>
                    <button onClick={() => handleEliminarPlatillo(platillo)}>Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No hay platillos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    ))}
  </div>
  );
};

export default Tabla;

