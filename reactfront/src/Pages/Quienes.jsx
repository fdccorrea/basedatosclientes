import React from 'react'
import imgTurno from '../Images/fondoTurnos.jpg'
import '../Styles/quienes.css'

function Quienes() {
  return (
    <div className='containerP'>      
        <img src={imgTurno} alt='quienes caja'/>
        
        <div className='containerS'>           
          Describe quién eres y los servicios que ofreces. 
          La información adicional puede ser muy útil, subtítulos claros.
          Según el tipo de organización y el objetivo, 
          Nuestra historia: incluye un breve párrafo acerca de la fundación y 
          la evolución de la compañía o del negocio.
          Nuestro equipo: incluye fotografías y biografías breves de tus empleados.
          los directivos en caso de que sea una empresa grande.            
          Casos de éxito: resalta algunos logros importantes o casos de éxito que puedan
           impresionar a los lectores. 
          Opiniones de nuestros clientes: incluye testimonios de algunos de tus clientes 
          que estén satisfechos .
         </div>             

    </div>
  )
}

export default Quienes  
