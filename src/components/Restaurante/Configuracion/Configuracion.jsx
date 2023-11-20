import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

import Loading from '../Loading/Loading';
import styles from './Configuracion.module.css'

import { guardarRestaurante, traerCategorias } from '../../../actions';
import Select from 'react-select'

const Configuracion = () => {
    const restaurante = useSelector(state => state.restaurante)
    const categoria = useSelector(state => state.categoria)
    const [actualizar, setActualizar] = useState(restaurante)
    const [loading, setLoading] = useState(true)


    const [profileImage, setProfileImage] = useState("")
    const [isLoading, setIsLoading] = useState(null)

    const [profileImage2, setProfileImage2] = useState("")
    const [isLoading2, setIsLoading2] = useState(null)

    const upload_preset = "images"
 
    const history = useHistory()
    const dispatch = useDispatch()

    const actualizarDatos = async () =>{      
      let json = await axios.patch(
        `http://localhost:3001/restaurante/actualizar`,
        actualizar
      )

      if(json.data[0]===true){
        dispatch(guardarRestaurante(actualizar))
        history.push(`http://localhost:3000/restaurante/sesion`)
      }
    }

    const handleImageChangue = async(e) =>{
      setProfileImage(e.target.files[0])
      setIsLoading(true)
    }

    const handleImageChangue2 = async(e) =>{
      setProfileImage2(e.target.files[0])
      setIsLoading2(true)
    }

    const handleChange = (e) => {
      setActualizar({
        ...actualizar,
        [e.target.name]: e.target.value,
      });
    }

    useEffect(() => {
      dispatch(traerCategorias());         
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    },[dispatch])

    const subirImagenACloudinary = async (image, actualizarProp, setIsLoading) => {
      if (image && (image.type === "image/png" || image.type === "image/jpg" || image.type === "image/jpeg")) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", upload_preset);
    
        try {
          const response = await axios.post("https://api.cloudinary.com/v1_1/dzhx3cwlp/image/upload", formData);
          const imgData = response.data;
    
          if (imgData.url) {
            const imageURL = imgData.url.toString();
            actualizarProp(imageURL);
            setIsLoading(false);
          } else {
            console.error('Error al obtener la URL de la imagen desde Cloudinary:', imgData);
          }
        } catch (error) {
          console.error('Error durante la carga de la imagen a Cloudinary:', error);
          setIsLoading(false);
        }
      }
    };
    
    useEffect(() => {
      subirImagenACloudinary(profileImage, imageURL => actualizar.logo = imageURL, setIsLoading);
    }, [profileImage]);
    
    useEffect(() => {
      subirImagenACloudinary(profileImage2, imageURL => actualizar.fachada = imageURL, setIsLoading);
    }, [profileImage2]);

  return (
    loading ? <Loading /> :
    <div className={styles.container}>
        <h1>Bienvenido</h1>
        <label>Nombre: {restaurante.nombre}</label>
        <label>Representante: {restaurante.representante}</label>
        <label>Correo: {restaurante.correo}</label>
        <label>Telefono: {restaurante.telefono}</label>
        <label>Dirección: {restaurante.direccion}</label>

        <Select isMulti options={categoria} value={actualizar.CategoriaRestaurantes}
            onChange={(selectedOptions) => {
              if (selectedOptions.length <= 5) {
                setActualizar({
                  ...actualizar,
                  CategoriaRestaurantes: selectedOptions
                });
              }
            }}
          />

        <label>Horario:</label>
          <input 
            type="text"
            name="horario"
            value={actualizar.horario}
            onChange={handleChange}
            />
          <label>Logo:</label> 
              <div>        
                  <p>                                   
                    <p><img src={actualizar.logo} alt=""/></p>
                    <input type="file" accept='image/png, image/jpeg' name="logo" onChange={handleImageChangue}></input>
                  </p>
                <p>
                </p>
                  <div>
                  {isLoading !== null && (
                    <div>
                      {isLoading ? (
                        <p>Cargando...</p>
                      ) : (
                        <p>Cargado</p>
                      )}
                    </div>
                  )}
                  </div>
              </div>

               <label>Fachada:</label> 
              <div>        
                  <p>                                   
                    <p><img src={actualizar.fachada} alt=""/></p>
                    <input type="file" accept='image/png, image/jpeg' name="fachada" onChange={handleImageChangue2}></input>
                  </p>
                <p>
                </p>
                  <div>
                  {isLoading2 !== null && (
                    <div>
                      {isLoading2 ? (
                        <p>Cargando...</p>
                      ) : (
                        <p>Cargado</p>
                      )}
                    </div>
                  )}
                  </div>
              </div>  
        <label>Cuenta Bancaria:</label>
            <input
            type="text"
            name="cuentaBancaria"
            value={actualizar.cuentaBancaria}
            onChange={handleChange}
            />
        <label>Alcance:</label>
            <input
            type="text"
            name="alcance"
            value={actualizar.alcance}
            onChange={handleChange}
            />
        <button onClick={actualizarDatos}>Actualizar</button>  
      </div>
  )
}

export default Configuracion