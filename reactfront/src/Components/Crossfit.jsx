import React from 'react'
import crossfit from '../Images/crossfit.jpg'
import '../Styles/entreTipos.css'

export const Crossfit = () => {
  return (
    <div className="contenedor">
      <img className="imagen" src={crossfit} alt="Descripción"  />
      <div> 
        <h1> Crossfit </h1>        
        <p className='parrafo'> Es como "un sistema de entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales constantemente variados realizados a una alta intensidad.
        Permite trabajar de forma integral los musculos de tu cuerpo. Así tonificarás el volumen muscular corporal de forma general.       
       </p>

      </div>
      

    </div>
  )
}
export default Crossfit