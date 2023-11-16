import { useDispatch, useSelector } from "react-redux";
import styles from './AdministrarPlatillos.module.css'
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from "axios";
import DataPlatillos from "./Tabla/Tabla";
import { eliminarPlatillo, guardarPlatillos } from "../../../actions";


const AdministrarPlatillos = () =>{
    const restaurante = useSelector(state => state.restaurante)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()

    const dispatch = useDispatch()
    const history = useHistory()


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
    
    const HomeSesion = () =>{
        history.push("/restaurante/")
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
            <button onClick={HomeSesion}>Atrás</button>
            <DataPlatillos data={data}/>
        </div>
    )

}

export default AdministrarPlatillos;