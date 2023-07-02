import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs'

const CompCreateBlog = () => {

//hooks
    const [titulo, setTitulo] = useState('')
    const [contenido, setContenido] = useState('')
    const [cel, setCel] = useState('')
    const navigate = useNavigate()


    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {titulo:titulo,contenido:contenido,cel:cel})
        navigate('/')
    }

    return (
        <div>             
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Apellido y Nombre </label>
                    <input
                        value={titulo}
                        onChange={ (e)=> setTitulo(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Email</label>
                    <textarea
                        value={contenido}
                        onChange={ (e)=> setContenido(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  

                 <div className='mb-3'>
                     <label className='form-label'>Celular </label>
                    <textarea
                        value={cel}
                        onChange={ (e)=> setCel(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <button type='submit' className='btn btn-primary'>GUARDAR</button>                  
           </form>
        </div>
    )
}

export default CompCreateBlog