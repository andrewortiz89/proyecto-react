import express from 'express'
import mysql from'mysql2/promise'
import cors from 'cors'



const app = express()
app.use (cors());

//comexion base de datos
const pool =  mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'adso',
  });
//conectar a la base de datos
app.get('/login',async (req,res)=>{
    const datos=req.query
    try {
        const [results, fields] = await pool.query(
          "SELECT * FROM `usuarios` WHERE `usuario` = ? AND `contraseña` = ? ",
          [datos.usuario,datos.contraseña]
        );
        if (results.length >0 ){
            res.status(200).send("Inicio de sesión correcto")

        }else{
            res.status(401).send("Error de inicio de sesión")
        }
      
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      } catch (err) {
        console.log(err);
      } 
})

//
app.get('/',  (req, res)=> {
  res.send('Hello World')
})

app.listen(3000)