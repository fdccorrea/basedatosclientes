import BlogModel from '../models/BlogModel.js';

//Muestro  TODOS
export const getAllBlogs = async (req, res) => {
    try {   
            const blogs = await BlogModel.findAll()
            res.json(blogs)
        }   catch (error) {
                res.json( {message:error.message } )
        }
}

// Muestro UN registro
export const getBlog = async (req, res) => {
    try {
         const blog = await BlogModel.findAll({
            where:{id:req.params.id}
         })
         res.json(blog[0])         
    }   catch (error) {
            res.json( {message:error.message} )
        }
}

//CREAR UN REGISTRO 
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json( { 
        "message":"¡REGISTRO CREADO!"  
        })
    }   catch (error){
        res.json( {message:error.message} )
    }
}

// ACTUIALIZAR UN REGISTRO
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id:req.params.id }
        })
        res.json( { 
            "message":"¡REGISTRO ACTUALIZADO!"
        })
    } catch (error) {
        res.json( {message:error.message} )
    }
}

//ELIMINAR REGISTRO 
export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id:req.params.id }
        })
        res.json({
            "message":"¡REGISTRO BORRADOOO!"
        })
    } catch (error) {
        res.json( {message:error.message} )
    }
}