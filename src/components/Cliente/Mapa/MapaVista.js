import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import Restaurantes from './Restaurantes'
import styles from "./mapa.css"

const MapaVista = () => {
  return <MapContainer center={{lat: "51.52437", lng: "13.41053"}} zoom={15} scrollWheelZoom={false}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
    <Restaurantes position={{lat: "51.52100", lng: "13.41063"}} />
    <Restaurantes position={{lat: "51.52500", lng: "13.41000"}} />
  </MapContainer>
}

export default MapaVista