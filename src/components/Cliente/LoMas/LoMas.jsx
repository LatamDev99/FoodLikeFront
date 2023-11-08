import { useState } from 'react';
import styles from "./LoMas.module.css"
import Search from '../Search/Search';
import NavBar from '../NavBar/NavBar';
import ToggleNavbar from '../NavBar/ToggleNavBar';
import Footer from '../Footer/Footer';

const LoMas = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    }

  return (
    <div className={styles.conteiner}>
      <ToggleNavbar isOpen={isOpen} toggleNavbar={toggleNavbar}/>
      <NavBar toggleNavbar={toggleNavbar}/>
      <Search/>
     <div>En construccion...</div>
      <Footer/>
    </div>
  )
}

export default LoMas