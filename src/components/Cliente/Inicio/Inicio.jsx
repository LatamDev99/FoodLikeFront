import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from "./Inicio.module.css"

const Inicio = () => {
  const [categorias, setCategorias] = useState([]);
  const [restaurantes, setRestaurantes] = useState(
    [
      {
        nombre: "McDonald's",
        imagen: "https://www.mcdonalds.com/content/dam/gwscorp/es-cr/logo/logo-mcdonalds-og.png",
      },
      {
        nombre: "Burger King",
        imagen: "https://www.burgerking.com.ar/images/bk-logo.png",
      },
      {
        nombre: "Domino's Pizza",
        imagen: "https://media.dominos.com.mx/images/dominos/home/Logotipo/imagen/logo-negro.png",
      },
      {
        nombre: "KFC",
        imagen: "https://www.kfc.com.mx/static/media/logo_kfc.b0e8a5e6.svg",
      },
      {
        nombre: "Subway",
        imagen: "https://order.subway.com/Assets/Subway/Responsive/i/global/svg_logo.svg",
      },
      {
        nombre: "Pizza Hut",
        imagen: "https://www.pizzahut.com.mx/Content/img/logos/logo_pizza_hut.png",
      },
      {
        nombre: "Taco Bell",
        imagen: "https://www.tacobell.com.mx/assets/img/logo.png",
      },
      {
        nombre: "Wendy's",
        imagen: "https://www.wendys.com.mx/assets/logos/WendysMx2020.png",
      },
      {
        nombre: "Carl's Jr.",
        imagen: "https://www.carlsjr.com.mx/wp-content/uploads/2020/02/carlsjr-logo.svg",
      },
      {
        nombre: "Little Caesars",
        imagen: "https://littlecaesars.com.mx/wp-content/uploads/2016/03/logo.png",
      },
    ]
  )

  useEffect(() => {
    const getData = async () => {
      try {
        if (categorias.length === 0) {
          const response = await axios.get('http://localhost:3001/categoriaRestaurante/todos');
          setCategorias(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [categorias]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,  // Número de elementos visibles a la vez
    slidesToScroll: 3,
  };

  return (
    <div className={styles.conteiner}>
      <div className={styles.categorias}>
        {categorias.map((categoria, index) => (
          <div key={index} className={styles.item}>
            <img src="" alt="" />
            <p>{categoria.nombre}</p>
          </div>
        ))}
      </div>
      <div className={styles.categorias}>
        {restaurantes.map((restaurante) => (
          <div key={restaurante.nombre} className={styles.item}>
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
