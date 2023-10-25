import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Favoritos from './Favoritos';
import InfoPersonal from './InfoPersonl';
import Proyectos from './Proyectos';
import Navbar from './Navbar';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Navbar/>}>
        <Route path="home" element ={<Home/>}/>
        <Route path="favoritos" element ={<Favoritos/>}/>
        <Route path ="infoPersonal" element ={<InfoPersonal/>}/>
        <Route path = "proyectos" element = {<Proyectos/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
      
   
  )
}

export default App;
