import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'

import axios from "axios";
import styles from './CrearPlatillo.module.css'

const CrearPlatillo = () =>{

    const categoriaPlatillo = useSelector(state => state.categoriaPlatillo)

    const [platillo, setPlatillo] = useState({categoriaId:categoriaPlatillo.id})
    
    const history = useHistory()


    const handleSubmit = async() =>{
        let json = await axios.post(
            `http://localhost:3001/platillo`,
            platillo
          )
        if(json.data==true){
            history.push("/restaurante")
        }
    }
    

    const handleChange = (e) => {
        setPlatillo({
          ...platillo,
          [e.target.name]: e.target.value,
        });
    }
    
    const ButtonRegresa = () =>{
        history.push("/restaurante/agregarplatillos")
    }    

    return(
        <div className={styles.container}>
            <button onClick={ButtonRegresa}>Atrás</button>
            <div>
                <label>Nombre: </label>
                <input
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                />
            </div>
            <div>
                <label>Descripción: </label>
                <input
                  type="text"
                  name="descripcion"
                  onChange={handleChange}
                />
            </div>
            <div>
                <label>Precio: </label>
                <input
                  type="text"
                  name="precio"
                  onChange={handleChange}
                />
            </div>
            <div>
                <label>Foto: </label>
                <input
                  type="text"
                  name="foto"
                  onChange={handleChange}
                />
            </div>
            <div>
                <label>Promo: </label>
                <input
                  type="text"
                  name="promo"
                  onChange={handleChange}
                />
            </div>
            <div>
                <label>Stock: </label>
                <input
                  type="text"
                  name="stock"
                  onChange={handleChange}
                />
            </div>

            <div>
                <button onClick={handleSubmit}>Crear Restaurante</button>
              </div> 


        </div>
    )
}


export default CrearPlatillo