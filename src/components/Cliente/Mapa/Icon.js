import L from "leaflet"
import location from "../assets/location.svg"

export const Icon = L.icon({
    iconUrl: require('../assets/location.png'),
    iconRetinaUrl: require('../assets/location.png'),
    iconAnchor: null,
    iconSize: [50, 50],
    className: "leaflet-marker-icon"
})
