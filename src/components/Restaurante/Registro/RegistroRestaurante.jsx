import { useSelector } from "react-redux";


const RegistroRestaurante = () => {

const categoriasGuardadas = useSelector((state) => state.categoriasGuardadas);

console.log(categoriasGuardadas)

    return (
      <div >
        'hola'
      </div>
    )
}
    
    
    export default RegistroRestaurante