import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios"
import Loading from "../../Loading/Loading"
import styles from "./Platillo.module.css"


const Platillo = () =>{
    
    const [loading, setLoading] = useState(true)

    const platillo = useSelector(state => state.platilloEditar)
    const [plat, setPlat ] = useState(platillo)
    const history = useHistory()

    const {CategoriaPlatillo} = platillo
    

    const administrarPlatillos = () =>{
        history.push(`/restaurante/administrarplatillos`)
    }

    const handleChange = (e) =>{
        setPlat({
            ...plat,
            [e.target.name]: e.target.value,
          });
    }

    const guardarPlatillo = async() =>{

        let json = await axios.patch(
            `http://localhost:3001/platillo`,
            plat
          )
        
          if (json.data===true){
            history.push(`/restaurante/administrarplatillos`)
          }
    }

    const handleButton = () => {
        setPlat({
            ...plat,
            activo: !plat.activo
        });
    }

    useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      },[])

    return(
        loading ? <Loading /> :
        <div className={styles.container}>

            <button onClick={administrarPlatillos}>Atrás</button>

            <h2>Categoría  {CategoriaPlatillo.nombre}</h2>
            <div>          
                <label>Nombre: </label>
                <input 
                    type="text" 
                    name="nombre" 
                    value={plat.nombre}
                    onChange={handleChange} />
            </div>
            <div>          
                <label>Descripción: </label>
                <input 
                    type="text" 
                    name="descripcion" 
                    value={plat.descripcion}
                    onChange={handleChange} />
            </div>
            <div>          
                <label>Precio: </label>
                <input 
                    type="text" 
                    name="precio" 
                    value={plat.precio}
                    onChange={handleChange} />
            </div>
            <div>          
                <label>Foto: </label>
                <input 
                    type="text" 
                    name="foto" 
                    value={plat.foto}
                    onChange={handleChange} />
            </div>
            <div>          
                <label>Promo: </label>
                <input 
                    type="text" 
                    name="promo" 
                    value={plat.promo}
                    onChange={handleChange} />
            </div>
            <div>          
                <label>Stock: </label>
                <input 
                    type="text" 
                    name="stock" 
                    value={plat.stock}
                    onChange={handleChange} />
            </div>
            <div>          
                <label>Activo: </label>
                <button 
                    type="text" 
                    name="activo" 
                    value={plat.activo}
                    onClick={handleButton}>{plat.activo ? 'Activo' : 'Inactivo'}</button>
            </div>
                <button onClick={guardarPlatillo}>Guardar</button>
            </div>
    )
}

export default Platillo