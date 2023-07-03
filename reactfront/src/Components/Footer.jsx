import React from 'react'
import '../Styles/footer.css'
import logo from '../Images/logo.png'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
   <div className='conteinerFooter'>
    <div className='pie-pagina'>
      <div className='box'>
        <figure>
          <a href="#"><img src={logo.png} alt="" /></a>
        </figure>
      </div>
     
      <div className='box'>
        <h2>SIGUENOS</h2>
        <div className='redSocial'>
          <a href="#" className='facebook'><FaFacebook/></a>
          <a href="#"><FaTwitter/></a>
          <a href="#"><FaYoutube/></a>
          <a href="#"><FaInstagram/></a>
        </div>
      </div>
    </div>
    <div className='grupoDos'> 
      <small>&copy; 2023 <b> YAS PER</b> Todos Los Derechos Reservados.</small>
    </div>


    Podesta Costa 3236, Barrio Jardin. Córdoba. Argentina


forestfitnesscf@gmail.com


+5493517573827


07 -10 / 16 – 22 hs
    
   </div>
  )
}

export default Footer