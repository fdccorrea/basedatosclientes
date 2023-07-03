import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/navbar.css'
import imglogo from '../Images/logo.png'

function NavBar() {
  return (
    <div className='container'>       

      <nav className='nav'>
        <img src={imglogo} height={60} width={80} />
        <li className='route-content'> <Link to='/'> Inicio </Link> </li>
        <li className='route-content'> <Link to='/entrenamientos'> Entrenamientos </Link> </li>
        <li className='route-content'> <Link to='/sumatehoy'> SUMATE HOY </Link> </li>
        <li className='route-content'> <Link to='/horarios'> Horarios </Link> </li>
        <li className='route-content'> <Link to='/quienessomos'> Quienes Somos </Link> </li>
        <li className='route-content'> <Link to='/contacto'> Contacto </Link> </li>        
        <li className='route-content'> <Link to='/admin'> ADMIN </Link> </li>        
      </nav>
    </div>
  )
}
export default NavBar