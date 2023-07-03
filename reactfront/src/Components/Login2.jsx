import React from 'react'
import { useState } from 'react'
import Admin from './Admin'


const Login2 = () => {

    const [miLogin, setLogin] = useState('false');
    const [usu, setUsu] = useState('');
    const [pass, setPass] = useState('');

    function inicioSesion(e) {
        e.preventDefault();
        var txtusu = document.getElementById('txtusu').value;
        var txtpas = document.getElementById('txtpas').value;
        if (txtusu.length===0 || txtpas.length===0) {
            alert('Complete los datos');
        }
        else {
            if (usu === "admin" && pass==="1234"){
                  setLogin("true");  
                  document.getElementById("form_login").style.display="none";
            }
            else {
                setLogin("false")
                alert('ERROR CLAVE O USUARIO');
                document.getElementById("txtusu").value = "";
                document.getElementById("txtpas").value = "";
                document.getElementById("txtusu").focus();
            }
        }
    }


  return (    
    <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
    <form id="form_login">
        <div>
            <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
            <label htmlFor="txtusu"><strong>Username</strong></label>
            <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={ (e)=>setUsu(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={ (e)=>setPass(e.target.value)} required/>
        </div><br/>
        <input type="submit" className="btn btn-primary" value="Login" onClick={ inicioSesion}/>
    </form>

     {miLogin ==="true" && < Admin/>}
    </div>

  )
}

export default Login2