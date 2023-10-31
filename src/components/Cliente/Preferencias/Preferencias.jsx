import React, { useEffect, useState } from 'react'
import styles from "./Preferencias.module.css"
import Loading from '../Loading/Loading'
import logo from "../../../img/logoFoodLike.png"

const Preferencias = () => {
    const [loading, setLoading] = useState(true)
    const [categorias, setCategorias] = useState([
        { nombre: "Mexicana", seleccionada: false },
        { nombre: "Saludable", seleccionada: false },
        { nombre: "Asiatica", seleccionada: false }
    ]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const handleCategoriaClick = (index) => {
        const updatedCategorias = [...categorias];
        updatedCategorias[index].seleccionada = !updatedCategorias[index].seleccionada;
        setCategorias(updatedCategorias);
    };

    return (
        loading ? <Loading/> :
        <div className={styles.conteiner}>
            <img src={logo} alt="" />
            <h3>Lo que te Gusta</h3>
            <div className={styles.categorias}>
                {categorias.map((categoria, index) => (
                    <div key={index} className={styles.categoriaItem}>
                        <label>
                            <input
                                type="checkbox"
                                checked={categoria.seleccionada}
                                onChange={() => handleCategoriaClick(index)}
                            />
                            {categoria.nombre}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Preferencias;
