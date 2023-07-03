import React from 'react'
import musculacion from '../Images/musculacion.jpg'
import '../Styles/entreTipos.css'

export const Musculacion = () => {
  return (
    <div className="contenedor">
      <img className="imagen" src={musculacion} alt="Descripción"  />
      <div> 
        <h1> Musculación </h1>        
        <p className='parrafo'> Es una disciplina que requiere tiempo, dedicación y esfuerzo. Como su propio nombre indica, su objetivo es el desarrollo de los músculos.
            En la actualidad, la práctica de la musculación es uno de los recursos más utilizados por todo tipo de personas ya sea para mejorar su físico, ganar masa muscular, perder peso.
        </p>

      </div>
      

    </div>
  )
}
export default Musculacion
