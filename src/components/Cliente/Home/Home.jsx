import { useState } from 'react';
import styles from "./Home.module.css"
import Search from '../Search/Search';
import NavBar from '../NavBar/NavBar';
import ToggleNavbar from '../NavBar/ToggleNavBar';
import Footer from '../Footer/Footer';
import Inicio from '../Inicio/Inicio';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.conteiner}>
      <ToggleNavbar isOpen={isOpen} toggleNavbar={toggleNavbar}/>
      <NavBar toggleNavbar={toggleNavbar}/>
      <Search/>
      <Inicio/>
      <Footer/>
    </div>
  )
}

export default Home