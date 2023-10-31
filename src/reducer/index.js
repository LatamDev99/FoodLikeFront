
const initialState = {
    categoria: [],
    categoriasGuardadas: [],
    nuevoUsuario: {},
    usuario: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

      case "TRAER_CATEGORIAS":

      return {
        ...state,
        categoria: action.payload,
      }

      case "GUARDAR_CATEGORIAS":
      console.log(state)
      return {
        ...state,
        categoriasGuardadas: action.payload,
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