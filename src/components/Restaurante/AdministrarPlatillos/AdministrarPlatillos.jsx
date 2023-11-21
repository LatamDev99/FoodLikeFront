import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import axios from "axios";

import styles from './AdministrarPlatillos.module.css'

import Loading from "../Loading/Loading";
import Tabla from "./Tabla/Tabla";
import { eliminarCategoriaPlatillo, guardarPlatillos } from "../../../actions";


const AdministrarPlatillos = () =>{
    const restaurante = useSelector(state => state.restaurante)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()

    const dispatch = useDispatch()

    const {CategoriaPlatillos} = restaurante

    const soloIds = CategoriaPlatillos?.map(categoria => categoria.id);

    const fetchData = async () => {        
    const response = await axios.post(
            `http://localhost:3001/platillo/restaurante`,
            soloIds
          );
          setData(response.data);
          dispatch(guardarPlatillos(response.data)) 
    }

    useEffect(() => {
        fetchData()
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      },[])

    return (
        loading ? <Loading /> :
        <div className={styles.container}>
          <div>
          <h1 className={styles.h1}>Administrar platillos</h1>
          </div>
            <Tabla data={data}/>
        </div>
    )
}

export default AdministrarPlatillos;