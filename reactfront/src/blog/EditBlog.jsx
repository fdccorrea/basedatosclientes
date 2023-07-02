import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
    const [titulo, setTitulo] = useState('')
    const [contenido, setContenido] = useState('')
    const [cel, setCel] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            titulo: titulo,
            contenido: contenido,
            cel: cel
        })
        navigate('/')
    }

    useEffect( () => {
        getBlogId()
    },[])

    const getBlogId = async () => {
        const res = await axios.get(URI+id)
        setTitulo(res.data.titulo)
        setContenido(res.data.contenido)
        setCel(res.data.cel)
    }

    return (
        <div>             
            <form onSubmit={update}>
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
export default CompEditBlog