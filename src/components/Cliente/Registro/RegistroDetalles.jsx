import React from 'react'
import { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import styles from "./Registro.module.css"
import logo from "../../../img/logoFoodLike.png"
import { useSelector, useDispatch } from "react-redux";
import { guardarNuevoUsuario } from '../../../actions'
import { useHistory } from 'react-router-dom'
import { validarStrings, validarTelefono } from './functions'

const RegistroDetalles = () => {
  let nuevoUsuario = useSelector(state => state.nuevoUsuario)
    const [loading, setLoading] = useState(true)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [lada, setLada] = useState("")
    const [telefono, setTelefono] = useState(0)
    const [errors, setErrors] = useState({ correo: "", contraseña: "" })
    const [hasErrors, setHasErrors] = useState(false);
    // const [codigo, setCodigo] = useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    })
    const history = useHistory();
    const onChangeNombre = (e) => {
        setNombre(e.target.value)
        const nombreError = validarStrings(e.target.value) ? "" : "El nombre no es valido";
        setErrors({ ...errors, nombre: nombreError });
        setHasErrors(Object.values({ ...errors, nombre: nombreError }).some((error) => error !== ""));
    }
    const onChangeApellido = (e) => {
        setApellido(e.target.value)
        const apellidoError = validarStrings(e.target.value) ? "" : "El apellido no es valido";
        setErrors({ ...errors, apellido: apellidoError });
        setHasErrors(Object.values({ ...errors, apellido: apellidoError }).some((error) => error !== ""));
    }
    const onChangeLada = (e) => {
        setLada(e.target.value)
    }
    const onChangeTelefono = (e) => {
        setTelefono(e.target.value)
        const telefonoError = validarTelefono(e.target.value) ? "" : "El telefono no es valido";
        setErrors({ ...errors, telefono: telefonoError });
        setHasErrors(Object.values({ ...errors, telefono: telefonoError }).some((error) => error !== ""));
    }
    // const onChangeCodigo = (e) => {
    //     setCodigo(e.target.value)
    // }
    const onClickContinuar = () => {
        let crearUsuario = {
            correo: nuevoUsuario.correo,
            contrasena: nuevoUsuario.contrasena,
            nombre: nombre, 
            apellido: apellido,
            lada: lada,
            telefono: telefono,
            // codigo: codigo
        }
        dispatch(guardarNuevoUsuario(crearUsuario))
        history.push("/cliente/preferencias")
      }
  return (
    loading ? <Loading/> :
    <div className={styles.conteiner}>
        <img src={logo} alt="" />
        <span>Nombre</span>
        <input type="text" value={nombre} onChange={onChangeNombre}/>
        <span className={styles.error}>{errors.nombre}</span>
        <span>Apellido</span>
        <input type="text" value={apellido} onChange={onChangeApellido}/>
        <span className={styles.error}>{errors.apellido}</span>
        <span>Lada</span>
        <input type="number" value={lada} onChange={onChangeLada}/>
        <span>Telefono</span>
        <input type="number" value={telefono} onChange={onChangeTelefono}/>
        <span className={styles.error}>{errors.telefono}</span>
        <button>Obtener Codigo</button>
        <div className={styles.codigo}>
      <input className={styles.code} type="number" />
      <input className={styles.code} type="number" />
      <input className={styles.code} type="number" />
      <input className={styles.code} type="number" />
      </div>
      <button onClick={onClickContinuar} disabled={hasErrors}>Continuar</button>
    </div>
  )
}

export default RegistroDetalles