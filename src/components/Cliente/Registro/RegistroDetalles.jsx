import React from 'react'
import { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import styles from "./Registro.module.css"
import logo from "../../../img/logoFoodLike.png"
import { useSelector, useDispatch } from "react-redux";
import { guardarNuevoUsuario } from '../../../actions'
import { Link } from 'react-router-dom'

const RegistroDetalles = () => {
  let nuevoUsuario = useSelector(state => state.nuevoUsuario)
    const [loading, setLoading] = useState(true)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [lada, setLada] = useState("")
    const [telefono, setTelefono] = useState(0)
    // const [codigo, setCodigo] = useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    })

    const onChangeNombre = (e) => {
        setNombre(e.target.value)
    }
    const onChangeApellido = (e) => {
        setApellido(e.target.value)
    }
    const onChangeLada = (e) => {
        setLada(e.target.value)
    }
    const onChangeTelefono = (e) => {
        setTelefono(e.target.value)
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
      }
  return (
    loading ? <Loading/> :
    <div className={styles.conteiner}>
        <img src={logo} alt="" />
        <span>Nombre</span>
        <input type="text" value={nombre} onChange={onChangeNombre}/>
        <span>Apellido</span>
        <input type="text" value={apellido} onChange={onChangeApellido}/>
        <span>Lada</span>
        <input type="number" value={lada} onChange={onChangeLada}/>
        <span>Telefono</span>
        <input type="number" value={telefono} onChange={onChangeTelefono}/>
        <button>Obtener Codigo</button>
        <div className={styles.codigo}>
      <input className={styles.code} type="number" />
      <input className={styles.code} type="number" />
      <input className={styles.code} type="number" />
      <input className={styles.code} type="number" />
      </div>
     <Link to={"/cliente/preferencias"}>
     <button onClick={onClickContinuar}>Continuar</button>
     </Link>
    </div>
  )
}

export default RegistroDetalles