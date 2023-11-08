import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import {Icon} from './Icon'

const Restaurantes = (props) => {
  return (
   <Marker position={props.position} icon={Icon}>
    <Popup>
        Esta es la casa de Eric
      </Popup>
   </Marker>
  )
}

export default Restaurantes