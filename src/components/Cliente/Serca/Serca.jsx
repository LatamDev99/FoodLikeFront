import React, { useState, useEffect } from 'react';
import MapaVista from '../Mapa/MapaVista';
import styles from "./Serca.module.css";
import Search from '../Search/Search';
import NavBar from '../NavBar/NavBar';
import ToggleNavbar from '../NavBar/ToggleNavBar';
import Footer from '../Footer/Footer';

const Serca = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [direccion, setDireccion] = useState(null);
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitud = position.coords.latitude;
          const longitud = position.coords.longitude;
          setLat(latitud);
          setLng(longitud);
          console.log(latitud, longitud);
          convertirCoordenadasADireccion(latitud, longitud);
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error.message);
        }
      );
    }
  }, []);

  // Función para convertir coordenadas en dirección utilizando servicio de geocodificación de Esri
  const convertirCoordenadasADireccion = (latitud, longitud) => {
    const url = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=json&featureTypes=&location=${longitud},${latitud}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.address) {
          const direccion = data.address.LongLabel;
          console.log('Dirección:', direccion);
          setDireccion(direccion);
        } else {
          console.error('No se encontraron resultados');
        }
      })
      .catch(error => {
        console.error('Error al convertir coordenadas:', error);
      });
  };

  return (
    <div className={styles.conteiner}>
      <ToggleNavbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <NavBar toggleNavbar={toggleNavbar} direccion={direccion}/>
      <Search />
      <MapaVista lat={lat} lng={lng} />
      <Footer />
    </div>
  );
};

export default Serca;
