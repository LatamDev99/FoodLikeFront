import { useState } from 'react';
import MapaVista from '../Mapa/MapaVista';
import styles from "./Serca.module.css"
import Search from '../Search/Search';
import NavBar from '../NavBar/NavBar';
import ToggleNavbar from '../NavBar/ToggleNavBar';
import Footer from '../Footer/Footer';
const Serca = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.conteiner}>
      <ToggleNavbar isOpen={isOpen} toggleNavbar={toggleNavbar}/>
      <NavBar toggleNavbar={toggleNavbar}/>
      <Search/>
      <MapaVista/>
      <Footer/>
    </div>
  )
}

export default Serca