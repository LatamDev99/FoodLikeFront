import React, { useEffect, useState } from 'react';
import styles from './Preferencias.module.css';
import Loading from '../Loading/Loading';
import logo from '../../../img/logoFoodLike.png';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { guardarNuevoUsuario } from '../../../actions'

const Preferencias = () => {
  const [loading, setLoading] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]); // Nuevo estado para rastrear categorías seleccionadas
  let nuevoUsuario = useSelector(state => state.nuevoUsuario)
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (categorias.length === 0) {
          const response = await axios.get('http://localhost:3001/categoriaRestaurante/todos');
          setCategorias(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [categorias]);

  const handleCategoriaClick = (index) => {
    const updatedCategorias = [...categorias];
    updatedCategorias[index].seleccionada = !updatedCategorias[index].seleccionada;
    setCategorias(updatedCategorias);
    const categoriaId = updatedCategorias[index].id;
    if (updatedCategorias[index].seleccionada) {
      setCategoriasSeleccionadas([...categoriasSeleccionadas, categoriaId]);
    } else {
      const updatedCategoriasSeleccionadas = categoriasSeleccionadas.filter(
        (id) => id !== categoriaId
      );
      setCategoriasSeleccionadas(updatedCategoriasSeleccionadas);
    }
  };

  const onClickContinuar = async () => {
    let crearUsuario = {
      correo: nuevoUsuario.correo,
      contrasena: nuevoUsuario.contrasena,
      nombre: nuevoUsuario.nombre,
      apellido: nuevoUsuario.apellido,
      lada: nuevoUsuario.lada,
      telefono: nuevoUsuario.telefono,
      preferencias: categoriasSeleccionadas
      // codigo: codigo
    }
    dispatch(guardarNuevoUsuario(crearUsuario))
    try {
      let response = await axios.post("http://localhost:3001/cliente/registro", crearUsuario)
      alert(response.data)
      history.push("/cliente/sesion")
    } catch (error) {
      alert(error)
    }
  }

  return (
    loading ? <Loading /> :
      <div className={styles.conteiner}>
        <img src={logo} alt="" />
        <h3>Lo que te Gusta</h3>
        <div className={styles.categorias}>
          {categorias.map((categoria, index) => (
            <div key={index} className={styles.categoriaItem}>
              <label>
                <input
                  type="checkbox"
                  checked={categoria.seleccionada}
                  onChange={() => handleCategoriaClick(index)}
                />
                {categoria.nombre}
              </label>
            </div>
          ))}
        </div>
        {categoriasSeleccionadas?.length > 0 && <button onClick={onClickContinuar}>Terminar</button>}

      </div>
  );
};

export default Preferencias;
