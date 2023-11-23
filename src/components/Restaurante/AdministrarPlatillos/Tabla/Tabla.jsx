import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Tabla.module.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useState } from 'react';

import { editarPlatillo, eliminarCategoriaPlatillo, guardarRestaurante, seleccionarCategoriaPlatillo } from '../../../../actions';
import { useEffect } from 'react';

const Tabla = () => {

  const [dataPlatillos, setDataPlatillos] = useState([])
  const restaurante = useSelector(state=>state.restaurante)

  const [nuevaCategoriaArray, setNuevaCategoriaArray] = useState(
    Array(dataPlatillos.length).fill('')
  );

  const cat  = dataPlatillos?.flatMap((categoria) =>
                    categoria?.map(({ id, nombre }) => ({ id, nombre }))
  )  

  const [categoriasPlatillos, setCategoriasPlatillos] = useState(cat)
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [nuevaCategoriaPush, setNuevaCategoriaPush] = useState('');

  const [mostrarTablaPorCategoria, setMostrarTablaPorCategoria] = useState({});

 

  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (platillo, nombre) => {       
          dispatch(editarPlatillo({platillo, nombre}))
          history.push(`/restaurante/editarplatillo`) 
  }

  const handleChange = (event) => {
    setNuevaCategoria(event.target.value);
  };

  const handleChangeNuevaCategoria = (event) => {
    setNuevaCategoriaPush(event.target.value);
  };

  const cambiarCategoria = async (e,  platilloId, categoriaSaliente ) => {

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
    
      try {
        const response = await axios.delete(`http://localhost:3001/categoriaplatillo/borrarcategoria/${id}`);
        if (response.status === 200) {
          setDataPlatillos((prevData) =>
            prevData
              .map((subArray) =>
                subArray.filter((categoriaPlatillo) => categoriaPlatillo.id !== id)
              )
              .filter((subArray) => subArray.length > 0)
          );
          setCategoriasPlatillos((prevCategorias) =>
            prevCategorias.filter((categoria) => categoria.id !== id)
          );
          dispatch(eliminarCategoriaPlatillo(id, restaurante));
        }
      } catch (error) {
        console.error('Error al eliminar la categoría:', error);
      }
  }; 

  const editarCategoria = async(id) =>{

      let categoria = {
        idCategoria : id,
        nuevoNombre: nuevaCategoria
      }
      let json = await axios.patch(
        `http://localhost:3001/categoriaplatillo/cambiarnombrecategoria`,
        categoria
      )

      if(json.status ===200){
        actualizarNombreCategoria(id, nuevaCategoria);
         setNuevaCategoria("")
      }  
  }

  const actualizarNombreCategoria = (idCategoria, nuevoNombre) => {
      const newDataPlatillos = dataPlatillos.map((categorias) => {
        return categorias.map((categoria) => {
          if (categoria.id === idCategoria) {
            return {
              ...categoria,
              nombre: nuevoNombre,
              value: nuevoNombre,
              label: nuevoNombre,
            };
          }
          return categoria;
        });
      });  
      setDataPlatillos(newDataPlatillos);
  };  

  const agregarCategoria = async() =>{
      let objCategoria = {
          nombre: nuevaCategoriaPush,
          idRestaurante :  restaurante.id
      }
      let json = await axios.post(
        `http://localhost:3001/categoriaPlatillo/agregar/`,
        objCategoria
      ) 
      restaurante.CategoriaPlatillos.push(json.data)
      dispatch(guardarRestaurante(restaurante))


        let obj ={
          id : restaurante.id
        }  
        let json2 = await axios.post(`http://localhost:3001/categoriaplatillo/traercategoriarestaurante`,obj) 
        setDataPlatillos(json2.data)   
        setNuevaCategoriaPush('')     
  }
    
  const fetchData = async () => {
      try {
        let obj = { id: restaurante.id };
        let response = await axios.post(`http://localhost:3001/categoriaplatillo/traercategoriarestaurante`, obj);
        setDataPlatillos(response.data);       
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
  };

  const mostrarItemsDeLaCategoria = (categoriaId) => {
    setMostrarTablaPorCategoria((prevMostrarTablaPorCategoria) => ({
      ...prevMostrarTablaPorCategoria,
      [categoriaId]: !prevMostrarTablaPorCategoria[categoriaId],
    }));
  };



  useEffect(() => {      
      fetchData(); 
  }, [  ]);

  useEffect(() => {
      const actualizarCategorias = dataPlatillos.flatMap((categoria) =>
        categoria.map(({ id, nombre }) => ({ id, nombre }))
      );
      setCategoriasPlatillos(actualizarCategorias);
  }, [dataPlatillos]);


  const moverACrearPlatillo = ( categoria ) =>{    

    dispatch(seleccionarCategoriaPlatillo(categoria))
    history.push("/restaurante/crearplatillo")       
}

return (    
    <div className={styles.container}>
        <div>
          <label>Agregar Categoría</label>
          <input
          type="text"
          value={nuevaCategoriaPush}
          onChange={handleChangeNuevaCategoria}
          placeholder="Nuevo nombre de categoría"></input>
          <button onClick={() => agregarCategoria()}  disabled={!nuevaCategoriaPush.trim()}>Agregar</button>
        </div>       

      <div className={styles.container}>
            {dataPlatillos.map((categoria, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <h3>
                  <h2>{categoria[0]?.nombre}</h2>
                  <label>
                    <button onClick={() => eliminarCategoria(categoria[0]?.id)}>
                      Eliminar
                    </button>
                  </label>
                  <label>
                    <input
                      type="text"
                      value={nuevaCategoriaArray[index]}
                      onChange={handleChange}
                      placeholder="Nuevo nombre de categoría"
                    />
                    {' '}
                    Editar
                    <button onClick={() => editarCategoria(categoria[0]?.id)} 
                            disabled={!nuevaCategoria.trim()}>
                      Editar
                    </button>
                    <button onClick={() => mostrarItemsDeLaCategoria(categoria[0]?.id)}>
                      {mostrarTablaPorCategoria[categoria[0]?.id] ? '↓' : '↑'}
                    </button>
                  </label>
                </h3>

                {mostrarTablaPorCategoria[categoria[0]?.id] && (
                  <table className={styles.adminTabla} border="2">

                    {categoria[0]?.Platillos && categoria[0]?.Platillos?.length > 0 ? (
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
                    ) : (
                      ''
                    )}
                    <tbody>
                    {categoria[0]?.Platillos && categoria[0]?.Platillos?.length > 0 ? (
                        categoria[0]?.Platillos?.map((platillo, platilloIndex) => (
                          <tr key={platilloIndex}>
                            <td>{platillo.nombre}</td>
                            <td>{platillo.descripcion}</td>
                            <td>{platillo.precio}</td>
                            <td>
                              <img src={platillo.foto} alt="" />
                            </td>
                            <td>{platillo.promo}</td>
                            <td>{platillo.stock}</td>
                            <td>{platillo.activo ? 'Activo' : 'Inactivo'}</td>
                            <td>
                              <button
                                onClick={() =>
                                  handleSubmit(platillo, categoria[0]?.nombre)
                                }
                              >
                                Editar
                              </button>
                            </td>
                            <td>
                              <select
                                value={`${index}-${platillo.id}`}
                                onChange={(e) =>
                                  cambiarCategoria(e, platillo.id, categoria[0]?.id)
                                }
                              >
                                {categoriasPlatillos?.map((categoriaItem, itemIndex) => (
                                  <option
                                    key={categoriaItem.id}
                                    value={`${itemIndex}-${platillo.id}`}
                                  >
                                    {categoriaItem.nombre}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td>
                              <button onClick={() => handleEliminarPlatillo(platillo)}>
                                Eliminar
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <div>
                        <label>No tienes platillos, pero puedes crear o traer uno =) </label>
                        <button className={styles.btnCrearPlatillo} onClick={ ()=>moverACrearPlatillo(categoria[0])}>Crear</button>
                        </div>
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </div>
      </div>
        );
};

export default Tabla;

