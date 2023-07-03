import React from 'react'
import Musculacion from '../Components/Musculacion'
import Fitness from '../Components/Fitness'
import Pilates from '../Components/Pilates'
import Crossfit from '../Components/Crossfit'

import '../Styles/entrenamiento.css'

function Entrenamientos() {
  return (     
      <div className='contenedorTipos'>           

         <div className='Tipos'>          
               <Musculacion />  
        </div>      
        <div className='Tipos'>          
               <Fitness  />  
        </div>      
        <div className='Tipos'>          
              <Pilates />  
         </div>      
         <div className='Tipos'>          
              <Crossfit  />  
         </div>                  
             
      </div>
  )
}

export default Entrenamientos 
