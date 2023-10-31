

const RegistroRestaurante = (props) => {

//armar un objeto, poner el nombre de las variables e igualarlas a props.categorias guardadas 

  return (
      <div >
        {props.categoriasGuardadas.map((game) => {
            return (
              <div>
                <p>{game.nombre}</p>
              </div>
            );
        })}
      </div>
    )
}   
    
export default RegistroRestaurante