import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Restaurante = () => {
    const { restauranteID } = useParams();
    
  return (
    <div>Restaurante: {restauranteID}</div>
  )
}

export default Restaurante