import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Login2 from '../Components/Login2'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
   
    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteBlog = async (id) => {
       await axios.delete(`${URI}${id}`)
       getBlogs()
    }


    return (
          <div className='container'> 
            <div className='row'> 
                <div className='col'> 
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i> Nuevo</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>                                     
                                    <th> Apellido y Nombre  </th>
                                    <th> Email </th>
                                    <th> Celular </th>
                                    <th> Acciones </th>
                            </tr>
                        </thead>
                        <tbody> 
                            { blogs.map ( (blog) => (
                                <tr key={blog.id}>                                  
                                    <td> { blog.titulo } </td>
                                    <td> { blog.contenido } </td>
                                    <td> { blog.cel } </td>
                                    <td>                                     
                                       <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fas fa-edit"></i> Editar</Link>
                                       <button onClick={ ()=> deleteBlog(blog.id)} className='btn btn-danger'> Delete </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>                        
                    </table>
                </div>
            </div>

          </div>  
    )
}
export default CompShowBlogs