import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { seleccionarCategoriaPlatillo } from '../../../actions';

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
    const [categoriaSeleccionada , setCategoriaSeleccionada] = useState()

    const history = useHistory()
    const dispatch = useDispatch()
   
    const crearCategoriaPlatillo = async () =>{


      if(platillos.nombre.length>0){
        let json = await axios.post(
            `http://localhost:3001/categoriaPlatillo/agregar/`,
            platillos
          )           
        actualizar.CategoriaPlatillos.push(json.data)
        dispatch(guardarRestaurante(actualizar))
      }
        
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

    const CrearPlatillo = () =>{      
      if(categoriaSeleccionada?.data?.id?.length>0){
       dispatch(seleccionarCategoriaPlatillo(categoriaSeleccionada.data))

        history.push("/restaurante/crearplatillo") 
      }         
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

        <Select options={actualizar.CategoriaPlatillos} 
        onChange={(item)=> setCategoriaSeleccionada({
                data:item
          })}

          />

        <label>Selecciona una categoría para crear un platillo</label>
        <button onClick={CrearPlatillo}>Crear Platillo</button> 

    </div>
  )
}

export default Platillos
