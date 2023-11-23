import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import styles from "./Inicio.module.css"

const Inicio = () => {
  const [categorias, setCategorias] = useState([]);
  const [restaurantes, setRestaurantes] = useState([])
  const history = useHistory();
  useEffect(() => {
    const getData = async () => {
      try {
        if (categorias.length === 0) {
          const categoriasR = await axios.get('http://localhost:3001/categoriaRestaurante/todos');
          setCategorias(categoriasR.data);
        }
        if(restaurantes.length === 0){
          const restaurantesR = await axios.get("http://localhost:3001/restaurante/todos");
          setRestaurantes(restaurantesR.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [categorias, restaurantes]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };

  const onClickRestaurante = (restauranteID) => {
    history.push(`/cliente/restaurante/${restauranteID}`)
  }

  return (
    <div className={styles.conteiner}>
      <div className={styles.categorias}>
        {categorias.map((categoria, index) => (
          <div key={index} className={styles.item} >
            <img src="" alt="" />
            <p>{categoria.nombre}</p>
          </div>
        ))}
      </div>
      <div className={styles.categorias}>
        {restaurantes.map((restaurante) => (
          <div key={restaurante.nombre} className={styles.item} onClick={() => onClickRestaurante(restaurante.id)}>
            <img src="" alt="" />
            <p>{restaurante.nombre}</p>
          </div>
        ))}
      </div>
      <div className={styles.categorias}>
        <div className={styles.item}>
          <img src="" alt="" />
          <p>Top</p>
        </div>
        <div className={styles.item}>
          <img src="" alt="" />
          <p>Descuentos</p>
        </div>
        <div className={styles.item}>
          <img src="" alt="" />
          <p>Promo</p>
        </div>
        <div className={styles.item}>
          <img src="" alt="" />
          <p>Envio</p>
        </div>
        <div className={styles.item}>
          <img src="" alt="" />
          <p>Cupones</p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;