import express from 'express'
import cors from 'cors'

// importamos la CONEXIOn de BD
import db from './database/db.js'
//importamos enrutador
import blogRoutes from './routes/routes.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

/*CONEXION */
try {
    await db.authenticate()
    console.log('conexion EXITOSA a la BD')
} catch (error) {
    console.log('el ERROR de conexion es: ${error}')
}

/*
app.get('/', (req, res) =>{    res.send('HOLA MUNDO')})*/

app.listen(8000, () =>{
    console.log('server up running in http://localhost:8000/')
} )







