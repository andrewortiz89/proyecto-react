import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [logeado, setLogeado] = useState('false')

function cambiarusuario(evento){
  setUsuario(evento.target.value)
}
function cambiarcontraseña(evento){
  setContraseña(evento.target.value)
}
  async function ingresar (){
  const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario +'&contrase%C3%B1a=' + contraseña) 
  if (peticion.ok){
    alert("usuario conectado")
    setLogeado(true)
  }else{
    alert("Usuario no registrado")
  }
}

  return (
    <>
 <header>


 <img src="/img/logo prueba 2 fin.png"  class="logo"/> 
    


    
</header>

      <h1>Inicio de Sesión</h1>
      <input type="text" name='usuario' id='usuario' placeholder='Ingrese un usuario' value={usuario}evento onChange={cambiarusuario}/>
      <input type="password" name='contraseña' id='contraseña' placeholder='Ingrese una contraseña' value={contraseña} evento onChange={cambiarcontraseña} />
      <button onClick={ingresar}>Ingresar</button>

    </>
  )
}

export default App
