import React from 'react'
import fitness from '../Images/fitness.jpg'
import '../Styles/entreTipos.css'

export const Fitness = () => {
  return (
    <div className="contenedor">
      <img className="imagen" src={fitness} alt="Descripción"  />
      <div> 
        <h1> Fitness </h1>        
        <p className='parrafo'>  El fitness apunta tanto a lo estético (tonificar los músculos, eliminar grasa, etc.) como a la salud (combatir el sobrepeso y mejorar la capacidad cardiovascular).
        Es lograr que el cuerpo pueda funcionar de un modo efectivo y eficiente para mantenerse saludable. Apela al desarrollo de ejercicios de resistencia, flexibilidad y fuerza.
        </p>

      </div>
      

    </div>
  )
}
export default Fitness
