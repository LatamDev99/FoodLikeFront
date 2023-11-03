import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import Loading from '../Loading/Loading';
import styles from './Home.module.css'

const Home = () => {
    const restaurante = useSelector(state => state.restaurante)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    })

  return (
    loading ? <Loading /> :
    <div className={styles.container}>
      <h1>Bienvenido</h1>
      <h2>Nombre: {restaurante.nombre}</h2>
      <h2>Correo: {restaurante.correo}</h2>
      <h2>Representante: {restaurante.representante}</h2>
      <h2>Telefono: {restaurante.telefono}</h2>
      <h2>Dirección: {restaurante.direccion}</h2>
    </div>
  )
}

export default Home