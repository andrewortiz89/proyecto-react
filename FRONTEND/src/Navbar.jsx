import React from "react";
import '.App.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><strong>Inicio</strong></li>
                </ul>
                <ul>
                
                <li>
                    <link to= "/">iniciar </link>
                 </li>
                 <li>
                    <link to= "/quienes">Quienes somos</link>
                 </li>
                
                 <li>
                    <link to= "/registro">Registro</link>
                 </li>
              </ul>
           </nav>
        </header>
    );
}
 export default Navbar;