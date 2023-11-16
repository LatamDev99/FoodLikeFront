import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'



import axios from "axios";
import styles from './CrearPlatillo.module.css'

const CrearPlatillo = () =>{

  const [profileImage, setProfileImage] = useState("")
  const [imagePreview, setImagePreview] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const upload_preset = "ml_default"


  const handleImageChangue = (e) =>{
    setProfileImage(e.target.files[0])
    setImagePreview(URL.createObjectURL(e.target.files[0]))
  }

  const uploadImage = async(e) =>{
    e.preventDefault()
    setIsLoading(true)

    try {
      let imageURL

      if( profileImage && ( 
        profileImage.type === "image/png" ||  
        profileImage.type === "image/jpg" ||
        profileImage.type === "image/jpeg"      
      ) ){

        const cloudinary = axios.create({
          baseURL: "https://api.cloudinary.com/v1_1/dzhx3cwlp",
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          auth: {
            username: '163442117916774',
            password: 'nWI9b-767ucMCamjEjXLX8yU0a0',
          },  
        });
        
        const image = new FormData();
        image.append("file", profileImage);
        image.append("upload_preset", upload_preset);

        try {
          const response = await cloudinary.post("/upload", image);
          const imgData = response.data;
          if (imgData.url) {
            const imageURL = imgData.url.toString();
            console.log(imageURL);
            setImagePreview(null);
          } else {
            console.error('Error al obtener la URL de la imagen desde Cloudinary:', imgData);
          }
        } catch (error) {
          console.error('Error durante la carga de la imagen a Cloudinary:', error);
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.error('Error durante la carga de la imagen a Cloudinary:', error);
      setIsLoading(false)
    }
  }



  ///////////////////////////

  const categoriaPlatillo = useSelector(state => state.categoriaPlatillo)
  const [platillo, setPlatillo] = useState({categoriaId:categoriaPlatillo.
  id})

    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = async() =>{
        let json = await axios.post(
            `http://localhost:3001/platillo`,
            platillo
          )

        if(json.data==true){
            history.push("/restaurante/agregarplatillos")
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
              <label>Categoría:  {categoriaPlatillo.nombre}</label>
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
                <button onClick={handleSubmit}>Crear</button>
              </div> 

              {/* //////////////////// */}

              <div>
      <section className="--flex-center">
      <div className='container'> 
        <div className='card'>
          <form onSubmit={uploadImage} className='--form-control'>
            <p>
              <label>Photo:</label>
              <input type="file" accept='image/png, image/jpeg' name="image" onChange={handleImageChangue}></input>
            </p>
            <p>
              {
              isLoading ?  ("Uploading...") : (
                <button type="submit" className="--btn --btn-primary">
                  Upload Image
                </button>
              )
              }
            </p>
          </form>

              <div className={styles.profilephoto}>
                <div>
                  {imagePreview && (
                    <img src={imagePreview && imagePreview} alt="profileImg" />
                  )}
                </div>
              </div>

        </div>
      </div>
      </section>
              </div>


              {/* ///////////// */}
        </div>
    )
}


export default CrearPlatillo