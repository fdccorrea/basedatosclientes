import React from 'react'
import pilates from '../Images/pilates.jpg'
import '../Styles/entreTipos.css'

export const Pilates = () => {
  return (
    <div className="contenedor">
      <img className="imagen" src={pilates} alt="Descripción"  />
      <div> 
        <h1> Pilates </h1>        
        <p className='parrafo'> Tiene como objetivo fortalecer el cuerpo y la mente desde la parte más profunda a la más superficial, aumentando y uniendo el dinamismo y la fuera muscular con el control mental, la relajación y la respiración. Es una disciplina que combina técnicas de gimnasia, ballet y yoga.
        El método pilates logra alinear el cuerpo.
        </p>

      </div>
      

    </div>
  )
}
export default Pilates 
