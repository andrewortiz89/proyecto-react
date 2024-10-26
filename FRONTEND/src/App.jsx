
import React from 'react';
import Navbar from './navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import login from './login';
import home from '../home';
import  quienes from './quienes';
import registro from './registro';

function App()  {
return (
< BrowserRouter>

 <Navbar /> 
 <Routes>
 <Route path= "/" element = { <home />}/>  

<Route path= "login" element = { <login />}/>
<Route path= "/quienes" element = { <quienes />}/>
<Route path= "/registro" element = { <registro />}/>

</Routes>
</BrowserRouter>
);
}
export default App;
