import React from 'react'
import Table from "rc-table";
import imgTurno from '../Images/fondoTurnos.jpg'
import '../Styles/horarios.css'

export const Horarios = () => {
  const data = [
    {
      dias: "Lunes",
      inicio: "08:00 hs.",
      email: "10:00 hs",
      key: "1",
      permanent: "yes",
    },
    {
      dias: "Martes",
      inicio: "08:00 hs.",
      email: "10:00 hs",
      key: "2",
      permanent: "no",
    },
    {
     dias: "Miercoles",
     inicio: "08:00 hs.",
     email: "10:00 hs",
     key: "3",
    permanent: "no",
    },
    {
    dias: "Jueves",
    inicio: "08:00 hs.",
    email: "10:00 hs",
    key: "4",
    permanent: "no",
    },
    {
    dias: "Viernes",
    inicio: "08:00 hs.",
    email: "10:00 hs",
    key: "4",
    permanent: "no",
    },
];


const columns = [
  {
  title: "DIA",
  dataIndex: "dias",
  key: "dias",
  width: 150,
  },
  {
  title: "Inicio Clase ", 
  dataIndex: "inicio",
  key: "inicio",
  width: 150, 
  },
{
title: "Fin Clase",
dataIndex: "email",
key: "email",
width: 200,
},
{
title: "Entrenamiento",
dataIndex: "permanent",
key: "permanent",
width:150,
},
];

  return (
    <div className='container-F'>      
      <img src={imgTurno} alt='sin turno'/>
      
        <div className='form-container'>
          <Table
            columns={columns}
            data={data}
            tableLayout="auto"
          />
        </div> 

    </div>
  )
}

export default Horarios
