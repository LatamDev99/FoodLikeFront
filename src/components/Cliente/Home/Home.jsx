import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
    const usuario = useSelector(state => state.usuario)
  return (
    <div>
      <h1>Bienvenido</h1>
      <h2>Nombre: {usuario.nombre}</h2>
      <h2>Apellido: {usuario.apellido}</h2>
      <h2>Lada: {usuario.lada}</h2>
      <h2>Telefono: {usuario.telefono}</h2>
      <h2>Correo: {usuario.correo}</h2>
    </div>
  )
}

export default Home