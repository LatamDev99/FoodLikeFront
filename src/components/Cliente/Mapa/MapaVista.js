import React, { useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import Restaurantes from './Restaurantes'
import styles from "./mapa.css"

const MapaVista = (props) => {
  var lat = props.lat && props.lat.toString() || "";
  var lng = props.lng && props.lng.toString() || "";

  if (lat.length === 0 || lng.length === 0) {
    return null;
  }

  return (
    <MapContainer center={{lat: `${lat}`, lng: `${lng}`}} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
      <Restaurantes position={{lat: "19.0360975", lng: "-98.8252610"}} />
      <Restaurantes position={{lat: "19.0471974", lng: "-98.8052609"}} />
    </MapContainer>
  );
}

export default MapaVista;
