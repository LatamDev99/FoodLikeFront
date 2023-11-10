import { act } from "react-dom/test-utils"

const initialState = {
    categoria: [],
    nuevoUsuario: {},
    usuario: {},
    restaurante: {},
    categoriaPlatillo: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

      case "TRAER_CATEGORIAS":

      return {
        ...state,
        categoria: action.payload,
      }

      case "GUARDAR_RESTAURANTE":
      return {
        ...state,
        restaurante: action.payload,
      }        

      case "AGREGAR_CATEGORIA_PLATILLO":
      return {
        ...state,
        categoriaPlatillo: action.payload,
      }     

      case "GUARDAR_NUEVO_USUARIO":
      return {
        ...state,
        nuevoUsuario: action.payload
      }

      case "DATOS_USUARIO":
      return {
        ...state,
        usuario: action.payload
      }
      
      default:
      return state;
    }
}

export default reducer;