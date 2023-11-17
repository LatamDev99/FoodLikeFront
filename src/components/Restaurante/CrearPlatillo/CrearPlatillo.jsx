import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect, useState } from 'react'
import axios from "axios";

import styles from './CrearPlatillo.module.css'

const CrearPlatillo = () =>{

  const [profileImage, setProfileImage] = useState("")
  const [imagePreview, setImagePreview] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const categoriaPlatillo = useSelector(state => state.categoriaPlatillo)
  const [platillo, setPlatillo] = useState({categoriaId:categoriaPlatillo.
  id})

  const upload_preset = "images"
  const history = useHistory()


  const handleImageChangue = async(e) =>{
    setProfileImage(e.target.files[0])
    setImagePreview(URL.createObjectURL(e.target.files[0]))
    setIsLoading(true)
  }
 
  const handleSubmit = async() =>{
    let json = await axios.post(
      `http://localhost:3001/platillo`,
      platillo
    )

    if(json.data==true){
        history.push("/restaurante/agregarplatillos")
    }      
  }

  const ButtonRegresa = () =>{
      history.push("/restaurante/agregarplatillos")
  }   

  const handleChange = (e) => {
    setPlatillo((prevPlatillo) => ({
      ...prevPlatillo,
      [e.target.name]: e.target.value,
    }));
  }
  
  useEffect(() => {
    const uploadImageToCloudinary = async () => {
      if (profileImage && ( 
        profileImage.type === "image/png" ||  
        profileImage.type === "image/jpg" ||
        profileImage.type === "image/jpeg"      
      )) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("upload_preset", upload_preset);
  
        try {
          const response = await axios.post("https://api.cloudinary.com/v1_1/dzhx3cwlp/image/upload", image);
          
          const imgData = response.data;
          if (imgData.url) {
            const imageURL = imgData.url.toString();
            setPlatillo((prevPlatillo) => ({
              ...prevPlatillo,
              foto: imageURL,
            }));
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
  
    uploadImageToCloudinary();
  }, [profileImage]);

    return(
        <div className={styles.container}>
            <button onClick={ButtonRegresa}>Atrás</button>

            <div>
              <label>Categoría:  {categoriaPlatillo.nombre}</label>
            </div>
            <div>        
                <p>
                  <label>Foto:</label>
                  <input type="file" accept='image/png, image/jpeg' name="foto" onChange={handleImageChangue}></input>
                </p>
              <p>
              </p>
                <div className={styles.profilephoto}>
                  <div>
                    {imagePreview && (
                      <img src={imagePreview && imagePreview} alt="profileImg" />
                    )}
                  </div>
                </div>
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
                <button onClick={handleSubmit}>Crear</button>
              </div> 
        </div>
    )
}


export default CrearPlatillo