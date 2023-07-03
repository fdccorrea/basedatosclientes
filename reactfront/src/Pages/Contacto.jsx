import React from 'react'
import imgTurno from '../Images/fondoTurnos.jpg'
import {useForm} from 'react-hook-form'
import { edadValidador } from '../Components/Validar';
import '../Styles/contacto.css';

function Contacto() {

  const { register, formState: {errors}, handleSubmit } = useForm();
    
  const onSubmit = (data) =>{
      console.log(data);
  };

  return (
    <div className='containerP'>
       <img src={imgTurno} alt='sin turno'/>
        <div className='form-container'>   
        
             <h1>   Formulario Contacto    </h1>     
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div className='form-field'>
                    <label className='form-label'> Nombre: </label>
                    <input className='form-input' type="text" {...register('nombre', 
                        {
                         required: true,
                         maxLength: 15   
                    })} />
                    {errors.nombre?.type==='required' && <p>Falta completar</p>}
                    {errors.nombre?.type==='maxLength' && <p>Solo 10 letras</p>}
                </div>

                <div className='form-field'>
                    <label className='form-label'> Direccion: </label>
                    <input className='form-input' type="text" {...register('direccion',
                        {
                         required: true       
                    })} />
                    {errors.direccion?.type==='required' && <p>Falta completar</p>}
                </div>

                <div className='form-field'>
                    <label className='form-label'> Edad: </label>
                    <input className='form-input' type="text" {...register('edad',
                        {
                         required: true,
                         validate: edadValidador
                        })} />
                        {errors.edad && <p> Edad entre 18 y 65 años</p>}
                </div>

                <div className='form-field'>
                    <label className='form-label'> Pais </label>
                    <select  {...register('pais')} > 
                        <option value="es"> España </option>
                        <option value="es"> ITALIA </option>
                        <option value="es"> Argentina </option>
                    </select>
                </div>
                <input className='form-button' type="submit" value="Enviar" />

            </form>

        </div>  
    </div>
  )
}

export default Contacto   