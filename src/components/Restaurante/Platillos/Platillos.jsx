import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios';
import Select from 'react-select'

import styles from "./Platillos.module.css"
import Loading from '../Loading/Loading'
import { guardarRestaurante } from '../../../actions';


const Platillos = () => {
    const restaurante = useSelector(state => state.restaurante)
    const [loading, setLoading] = useState(true)
    const [platillos, setPlatillos] = useState({idRestaurante: restaurante.id})
    const [actualizar, setActualizar] = useState(restaurante)

    const history = useHistory()
    const dispatch = useDispatch()
   
    const crearCategoriaPlatillo = async () =>{

        let json = await axios.post(
            `http://localhost:3001/categoriaPlatillo/agregar/`,
            platillos
          )  
        actualizar.CategoriaPlatillos.push(json.data)
        console.log(actualizar)
        dispatch(guardarRestaurante(actualizar))
    }

    const handleChange = (e) => {
        setPlatillos({
          ...platillos,
          [e.target.name]: e.target.value,
     });
      }

    const HomeSesion = () =>{
        history.push("/restaurante/")
      }

    useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      })

    return (
    loading ? <Loading /> :
    <div className={styles.container}>

        <button onClick={HomeSesion}>Regresar atrás</button>
            
            Agrega una categoría de platillos:
            <input 
            type="text"
            name="nombre"
            onChange={handleChange}
            />
        <button onClick={crearCategoriaPlatillo}>Crear Categoria</button> 

        <Select isMulti value={actualizar.CategoriaPlatillos} 
          />
        

    </div>
  )
}

export default Platillos
