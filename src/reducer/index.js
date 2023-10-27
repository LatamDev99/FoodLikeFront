
const initialState = {
    categoria: [],
    categoriasGuardadas: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {

      case "TRAER_CATEGORIAS":
      return {
        ...state,
        categoria: action.payload,
      }
      case "GUARDAR_CATEGORIAS":
      return {
        ...state,
        categoriasGuardadas: action.payload,
      }  

      

      default:
      return state;
    }
}

export default reducer;