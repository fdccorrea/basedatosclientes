import React from 'react'
import imgTurno from '../Images/fondoTurnos.jpg'
import promo2 from '../Images/promo2.jpg'
import promo3 from '../Images/promo3.jpg'
import promo4 from '../Images/promo4.jpg'

import '../Styles/sumatehoy.css'

function SumateHoy() {
  return (
    <div className='contenedorFondo' >                  
         
        <div className='promo'>
        <img src={promo2} alt='sin turno'/>
        </div>    

        <div className='promo'>
        <img src={promo3} alt='sin turno'/>
        </div>

        <div className='promo'>
        <img src={promo4} alt='sin turno'/>
        </div>                                                                                   
    
    </div>
  )
}

export default SumateHoy
