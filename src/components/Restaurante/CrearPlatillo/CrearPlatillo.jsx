import { useSelector } from 'react-redux'
import styles from './CrearPlatillo.module.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'



const CrearPlatillo = () =>{

    const categoriaPlatillo = useSelector(state => state.categoriaPlatillo)
    const restaurante = useSelector(state => state.restaurante)

    const [platillo, setPlatillo] = useState({restauranteId: restaurante.id,
        categoriaId:categoriaPlatillo.id})
    
    const history = useHistory()

    console.log(platillo.id, restaurante.id)
    
    const ButtonRegresa = () =>{
        history.push("/restaurante/agregarplatillos")
    }    

    return(
        <div className={styles.container}>
            <button onClick={ButtonRegresa}>Atrás</button>
            <h1>{platillo.nombre}</h1>
            


            
        </div>
    )
}


export default CrearPlatillo